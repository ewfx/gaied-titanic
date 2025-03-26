import React from 'react';
import { Mail, Star, Send, Archive, Trash2, Tag, Plus, ChevronDown } from 'lucide-react';

interface SidebarProps {
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
  categories: string[];
}

const Sidebar: React.FC<SidebarProps> = ({ selectedCategory, onCategorySelect, categories }) => {
  return (
    <div className="w-64 bg-gray-100 h-full overflow-y-auto">
      <div className="p-4">
        <button className="w-full bg-blue-600 text-white rounded-md py-3 px-4 flex items-center justify-center mb-6 hover:bg-blue-700">
          <Plus className="mr-2 h-5 w-5" />
          New Email
        </button>
        
        <div className="mb-6">
          <div className="flex items-center justify-between text-gray-600 mb-2 px-2">
            <span className="text-sm font-medium">Favorites</span>
            <ChevronDown className="h-4 w-4" />
          </div>
          <div className="space-y-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategorySelect(category)}
                className={`w-full text-left px-4 py-2 rounded-md flex items-center ${
                  selectedCategory === category ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'Work' && <Mail className="mr-3 h-5 w-5" />}
                {category === 'Social' && <Star className="mr-3 h-5 w-5" />}
                {category === 'Promotions' && <Tag className="mr-3 h-5 w-5" />}
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-1">
          <button className="w-full text-left px-4 py-2 rounded-md flex items-center text-gray-700 hover:bg-gray-200">
            <Send className="mr-3 h-5 w-5" />
            Sent
          </button>
          <button className="w-full text-left px-4 py-2 rounded-md flex items-center text-gray-700 hover:bg-gray-200">
            <Archive className="mr-3 h-5 w-5" />
            Archive
          </button>
          <button className="w-full text-left px-4 py-2 rounded-md flex items-center text-gray-700 hover:bg-gray-200">
            <Trash2 className="mr-3 h-5 w-5" />
            Trash
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;