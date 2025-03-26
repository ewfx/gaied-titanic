import os
import base64
import json
import pickle
import re
import time
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.errors import HttpError
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials

# If modifying the email label, we'll need 'https://www.googleapis.com/auth/gmail.modify'
SCOPES = ['https://www.googleapis.com/auth/gmail.readonly']

# Function to authenticate and get the Gmail service
def authenticate_gmail():
    creds = None
    # The file token.pickle stores the user's access and refresh tokens, and is created automatically when the authorization flow completes for the first time.
    if os.path.exists('token.pickle'):
        with open('token.pickle', 'rb') as token:
            creds = pickle.load(token)
    
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                'credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)
        
        # Save the credentials for the next run
        with open('token.pickle', 'wb') as token:
            pickle.dump(creds, token)

    service = build('gmail', 'v1', credentials=creds)
    return service

# Function to get a list of emails
def get_emails(service, label_ids=['INBOX']):
    try:
        results = service.users().messages().list(userId='me', labelIds=label_ids).execute()
        messages = results.get('messages', [])
        
        emails = []
        if not messages:
            print('No messages found.')
        else:
            for message in messages:
                msg = service.users().messages().get(userId='me', id=message['id']).execute()
                email_data = msg['payload']['headers']
                
                for values in email_data:
                    name = values['name']
                    if name == 'From':
                        from_name = values['value']
                    if name == 'Subject':
                        subject = values['value']
                
                # Decode email body
                try:
                    data = msg['payload']['body']["data"]
                    byte_code = base64.urlsafe_b64decode(data)
                    text = byte_code.decode("utf-8")
                except BaseException:
                    pass
                
                email = {
                    'from': from_name,
                    'subject': subject,
                    'body': text
                }
                emails.append(email)

        return emails

    except HttpError as error:
        print(f'An error occurred: {error}')

