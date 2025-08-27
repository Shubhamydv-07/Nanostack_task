import React from 'react';
import { X } from 'lucide-react';

const Sidebar = ({ sidebarOpen, setSidebarOpen, sidebarItems, assets }) => {
  return (
    <div className={`${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} fixed inset-y-0 left-0 z-50 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
      <div className="flex items-center justify-between h-16.5 px-4 border-b shadow-sm border-gray-300">
        <div className="flex items-center space-x-2">
          <span className="font-semibold">
            <img src={assets.adam} alt="" />
          </span>
        </div>
        <button
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <nav className="flex-1 px-4 py-4 overflow-y-auto">
        {sidebarItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className="group flex items-center px-2 py-2 text-sm font-medium text-gray-600 hover:bg-purple-100 hover:text-purple-900 transition-colors duration-150 rounded-[10%]"
          >
            <img
              src={item.avatar}
              alt={item.name}
              className="w-5 h-5 mr-3 transition-colors duration-150"
            />
            <span className="truncate">{item.name}</span>
            {item.arrow && (
              <div className="ml-auto">
                <img src={item.arrow} alt="" />
              </div>
            )}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;