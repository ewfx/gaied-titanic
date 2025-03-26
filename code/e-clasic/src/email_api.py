from flask import Flask, jsonify
from collections import defaultdict
from classify_emails import classify_email
from extract_emails import authenticate_gmail, get_emails
app = Flask(__name__)

# Sample function to categorize emails
def categorize_emails(emails):
    categorized_emails = defaultdict(list)
    for email in emails:
        category = classify_email(email['subject'] + ' ' + email['body'])  # Combining subject and body for better accuracy
        categorized_emails[category].append(email)
    return categorized_emails

@app.route('/emails')
def get_grouped_emails():
    # Authenticate and get emails from Gmail
    service = authenticate_gmail()
    emails = get_emails(service)
    
    # Categorize emails
    categorized_emails = categorize_emails(emails)
    
    # Return categorized emails as JSON
    return jsonify(categorized_emails)


# Sample email data
sample_emails = [
    {"from": "alice@example.com", "subject": "Project Update", "body": "Hey, here is the update on the new project...", "category": "Work"},
    {"from": "bob@example.com", "subject": "Sale on Electronics", "body": "Huge discounts on laptops and gadgets!", "category": "Promotions"},
    {"from": "charlie@example.com", "subject": "New Photo Tagged", "body": "You have been tagged in a photo by Alice.", "category": "Social"},
    {"from": "dave@example.com", "subject": "Meeting on Monday", "body": "Let's discuss the project updates on Monday.", "category": "Work"},
    {"from": "eve@example.com", "subject": "Flash Sale - 50% Off", "body": "Limited time offer on our entire store.", "category": "Promotions"},
    {"from": "frank@example.com", "subject": "Reminder: Birthday Party", "body": "Don't forget to attend the birthday party!", "category": "Social"},
]

# Group emails by category
def categorize_emails1():
    categorized_emails = defaultdict(list)
    for email in sample_emails:
        categorized_emails[email["category"]].append(email)
    return categorized_emails

@app.route('/emails1', methods=['GET'])
def get_grouped_emails1():
    # Categorize the emails
    categorized_emails = categorize_emails1()
    
    # Return the categorized emails as JSON
    return jsonify(categorized_emails)

if __name__ == '__main__':
    app.run(debug=True)
