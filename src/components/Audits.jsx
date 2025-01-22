import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getStatusColor } from './statusUtils';
import auditData from './auditData';

export default function Audits() {
  const [audits] = useState(auditData);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Audit Management</h1>
        <Link
          to="/audits/new"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer"
        >
          New Audit
        </Link>
      </div>

      <div className="bg-white shadow overflow-hidden rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Audit Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Score</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {audits.map((audit) => (
              <tr key={audit.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{audit.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{audit.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`${getStatusColor(audit.status)} px-2 inline-flex text-xs leading-5 font-semibold rounded-full`}>
                    {audit.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{audit.score}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <Link
                    to={`/audits/${audit.id}`}
                    className="text-blue-600 hover:text-blue-900 cursor-pointer"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}