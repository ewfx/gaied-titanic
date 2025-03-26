import React, { useState } from 'react';
import { emailData } from './data';
import type { Email } from './types';
import Sidebar from './components/Sidebar';
import EmailList from './components/EmailList';
import EmailContent from './components/EmailContent';
import TopNav from './components/TopNav';
import FormatToolbar from './components/FormatToolbar';

function App() {
  const categories = Object.keys(emailData);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);

  return (
    <div className="flex flex-col h-screen bg-white">
      <TopNav />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
          categories={categories}
        />
        <div className="flex flex-col flex-1">
          <FormatToolbar />
          <div className="flex flex-1 overflow-hidden">
            <EmailList
              emails={emailData[selectedCategory]}
              selectedEmail={selectedEmail}
              onEmailSelect={setSelectedEmail}
            />
            <EmailContent email={selectedEmail} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App