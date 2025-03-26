import React from 'react';
import type { Email } from '../types';

interface EmailListProps {
  emails: Email[];
  selectedEmail: Email | null;
  onEmailSelect: (email: Email) => void;
}

const EmailList: React.FC<EmailListProps> = ({ emails, selectedEmail, onEmailSelect }) => {
  return (
    <div className="w-96 border-r border-gray-200 overflow-y-auto bg-white">
      <div className="sticky top-0 bg-white border-b border-gray-200 p-3">
        <div className="font-semibold text-gray-700">Focused</div>
      </div>
      {emails.map((email, index) => (
        <div
          key={index}
          onClick={() => onEmailSelect(email)}
          className={`p-3 border-b border-gray-200 cursor-pointer ${
            selectedEmail === email ? 'bg-blue-50' : 'hover:bg-gray-50'
          }`}
        >
          <div className="flex items-center mb-1">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-sm mr-3">
              {email.from.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1">
              <div className="font-semibold text-gray-900">{email.from}</div>
              <div className="text-sm text-gray-600">{new Date().toLocaleTimeString()}</div>
            </div>
          </div>
          <div className="font-medium text-gray-900 mb-1">{email.subject}</div>
          <div className="text-sm text-gray-500 line-clamp-2">{email.body}</div>
        </div>
      ))}
    </div>
  );
};

export default EmailList;