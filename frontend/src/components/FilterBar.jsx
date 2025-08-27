import React from 'react';
import { Search, ChevronDown } from 'lucide-react';

const FilterBar = () => {
  return (
    <div className="flex flex-wrap gap-1 border rounded-lg border-gray-300 px-2 py-2">
      <div className="relative px-2 py-2">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Search anything here..."
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      {['Buyer Name', 'Brand', 'Dept', 'Meeting Type', 'Participants', 'Meeting Date', 'Status'].map((filter) => (
        <button
          key={filter}
          className="flex items-center px-2 py-2 m-2 border text-gray-500 border-gray-300 rounded-lg text-sm hover:bg-gray-50"
        >
          {filter}
          <ChevronDown className="w-4 h-4 ml-1" />
        </button>
      ))}
    </div>
  );
};

export default FilterBar;