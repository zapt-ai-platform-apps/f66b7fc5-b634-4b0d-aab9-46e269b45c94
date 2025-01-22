import React from 'react';

const RecentActivity = ({ title, items, statusLabel, statusColor }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <h2 className="text-lg font-semibold mb-4">{title}</h2>
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item} className="border-b pb-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">
              {title.includes('Audit') ? `Site Audit #${item}` : `Incident Case #${item}`}
            </span>
            <span className={`px-2 py-1 text-xs font-medium ${statusColor} rounded-full`}>
              {statusLabel}
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            {title.includes('Audit') 
              ? `Due: 2024-03-${15 + item}`
              : `Reported: 2024-03-${10 + item}`}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default RecentActivity;