import React from 'react';

export function Footer() {
  return (
    <footer className="border-t bg-white mt-8">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-between text-sm">
        <span className="text-gray-500">&copy; {new Date().getFullYear()} Mercury Support</span>
        <a 
          href="https://www.zapt.ai" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Made on ZAPT
        </a>
      </div>
    </footer>
  );
}