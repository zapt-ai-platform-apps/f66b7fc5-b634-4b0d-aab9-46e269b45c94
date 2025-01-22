import React from 'react';

export function Footer() {
  return (
    <footer className="border-t bg-white mt-8">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
        <a 
          href="https://www.zapt.ai" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 cursor-pointer"
        >
          Made on ZAPT
        </a>
      </div>
    </footer>
  );
}