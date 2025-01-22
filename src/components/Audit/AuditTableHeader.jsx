import React from 'react';

const AuditTableHeader = () => (
  <thead className="bg-gray-50">
    <tr>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Audit Round</th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Site</th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Score</th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Critical Issues</th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
    </tr>
  </thead>
);

export default AuditTableHeader;