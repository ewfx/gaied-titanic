import React from 'react';
import { Bell, MessageSquare, HelpCircle, Settings, Minus, Square, X } from 'lucide-react';

const TopNav = () => {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center">
          <div className="text-blue-600 font-semibold text-xl flex items-center">
            <MessageSquare className="h-6 w-6 mr-2" />
            Outlook
          </div>
          <div className="ml-8 relative w-96">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-1.5 pr-8 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-1.5 hover:bg-gray-100 rounded-md">
            <Bell className="h-5 w-5 text-gray-600" />
          </button>
          <button className="p-1.5 hover:bg-gray-100 rounded-md">
            <HelpCircle className="h-5 w-5 text-gray-600" />
          </button>
          <button className="p-1.5 hover:bg-gray-100 rounded-md">
            <Settings className="h-5 w-5 text-gray-600" />
          </button>
          <div className="flex items-center space-x-2">
            <button className="p-1.5 hover:bg-gray-100 rounded-md">
              <Minus className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-1.5 hover:bg-gray-100 rounded-md">
              <Square className="h-4 w-4 text-gray-600" />
            </button>
            <button className="p-1.5 hover:bg-gray-100 rounded-md">
              <X className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;