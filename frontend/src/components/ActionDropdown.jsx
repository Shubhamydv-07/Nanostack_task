import React from 'react';
import { MoreHorizontal, Eye, Edit, Activity, Trash2 } from 'lucide-react';

const ActionDropdown = ({ actionDropdownOpen, setActionDropdownOpen, meeting }) => {
  return (
    <div className="relative">
      <button
        onClick={() => setActionDropdownOpen(actionDropdownOpen === meeting.id ? null : meeting.id)}
        className="text-gray-400 hover:text-gray-600 p-1 rounded action-trigger"
      >
        <MoreHorizontal className="w-4 h-4" />
      </button>

      {actionDropdownOpen === meeting.id && (
        <div className="absolute right-0 top-full mt-1 w-40 bg-white rounded-lg shadow-lg border z-50 action-dropdown">
          <div className="py-2">
            <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
              <Eye className="w-4 h-4 mr-3 text-gray-400" />
              View
            </button>
            <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
              <Edit className="w-4 h-4 mr-3 text-gray-400" />
              Edit
            </button>
            <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
              <Activity className="w-4 h-4 mr-3 text-gray-400" />
              Activity Log
            </button>
            <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
              <Trash2 className="w-4 h-4 mr-3 text-gray-400" />
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActionDropdown;