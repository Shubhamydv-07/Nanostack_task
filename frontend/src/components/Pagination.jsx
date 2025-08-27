import React from 'react';

const Pagination = () => {
  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
          Previous
        </button>
        <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
          Next
        </button>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1-50</span> of <span className="font-medium">100</span> results
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-700">Items Per Page</span>
          <select className="border border-gray-300 rounded px-3 py-1 text-sm">
            <option>50</option>
            <option>100</option>
            <option>200</option>
          </select>
        </div>
        <div>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
            {[1, 2, 3, 4, '...', 10, 11, 12].map((page, index) => (
              <button
                key={index}
                className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                  page === 1
                    ? 'bg-purple-600 text-white border-purple-600'
                    : 'bg-white text-gray-500 border-gray-300 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;