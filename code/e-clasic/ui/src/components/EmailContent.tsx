import React from 'react';
import { Reply, Forward, Trash2, Archive, MoreHorizontal } from 'lucide-react';
import type { Email } from '../types';

interface EmailContentProps {
  email: Email | null;
}

const EmailContent: React.FC<EmailContentProps> = ({ email }) => {
  if (!email) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-500 bg-gray-50">
        Select an email to view its content
      </div>
    );
  }

  return (
    <div className="flex-1 bg-white overflow-y-auto">
      <div className="sticky top-0 bg-white border-b border-gray-200 p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-900">{email.subject}</h1>
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600">
              <Reply className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600">
              <Forward className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600">
              <Archive className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600">
              <Trash2 className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600">
              <MoreHorizontal className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
            {email.from.charAt(0).toUpperCase()}
          </div>
          <div className="ml-4 flex-1">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-gray-900">{email.from}</div>
                <div className="text-sm text-gray-500">To: me</div>
              </div>
              <div className="text-sm text-gray-500">
                {new Date().toLocaleString()}
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-gray-800 whitespace-pre-wrap">
          {email.body}
        </div>
      </div>
    </div>
  );
};

export default EmailContent;