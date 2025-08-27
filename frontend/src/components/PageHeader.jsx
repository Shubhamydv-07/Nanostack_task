import React from 'react';
import { Download, Plus } from 'lucide-react';

const PageHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Buyer Meeting List View</h1>
        <p className="text-sm text-gray-500 mt-1">
          <span className="text-purple-700">Buyer Meeting</span> → Buyer Meeting List View
        </p>
      </div>
      <div className="flex space-x-3 mt-4 sm:mt-0">
        <button className="flex items-center px-4 py-2 text-white bg-purple-600 border border-purple-600 rounded-lg hover:bg-purple-700">
          <Download className="w-4 h-4 mr-2 text-white" />
          Export
        </button>
        <button className="flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
          <Plus className="w-4 h-4 mr-2" />
          Create New Meeting
        </button>
      </div>
    </div>
  );
};

export default PageHeader;
