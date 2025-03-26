import React from 'react';
import { 
  Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, 
  List, ListOrdered, Paperclip, Image, Link
} from 'lucide-react';

const FormatToolbar = () => {
  return (
    <div className="border-b border-gray-200 p-2 flex items-center space-x-2">
      <div className="flex items-center space-x-1 border-r border-gray-200 pr-2">
        <button className="p-1.5 hover:bg-gray-100 rounded-md">
          <Bold className="h-4 w-4 text-gray-600" />
        </button>
        <button className="p-1.5 hover:bg-gray-100 rounded-md">
          <Italic className="h-4 w-4 text-gray-600" />
        </button>
        <button className="p-1.5 hover:bg-gray-100 rounded-md">
          <Underline className="h-4 w-4 text-gray-600" />
        </button>
      </div>
      <div className="flex items-center space-x-1 border-r border-gray-200 pr-2">
        <button className="p-1.5 hover:bg-gray-100 rounded-md">
          <AlignLeft className="h-4 w-4 text-gray-600" />
        </button>
        <button className="p-1.5 hover:bg-gray-100 rounded-md">
          <AlignCenter className="h-4 w-4 text-gray-600" />
        </button>
        <button className="p-1.5 hover:bg-gray-100 rounded-md">
          <AlignRight className="h-4 w-4 text-gray-600" />
        </button>
      </div>
      <div className="flex items-center space-x-1 border-r border-gray-200 pr-2">
        <button className="p-1.5 hover:bg-gray-100 rounded-md">
          <List className="h-4 w-4 text-gray-600" />
        </button>
        <button className="p-1.5 hover:bg-gray-100 rounded-md">
          <ListOrdered className="h-4 w-4 text-gray-600" />
        </button>
      </div>
      <div className="flex items-center space-x-1">
        <button className="p-1.5 hover:bg-gray-100 rounded-md">
          <Paperclip className="h-4 w-4 text-gray-600" />
        </button>
        <button className="p-1.5 hover:bg-gray-100 rounded-md">
          <Image className="h-4 w-4 text-gray-600" />
        </button>
        <button className="p-1.5 hover:bg-gray-100 rounded-md">
          <Link className="h-4 w-4 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default FormatToolbar;