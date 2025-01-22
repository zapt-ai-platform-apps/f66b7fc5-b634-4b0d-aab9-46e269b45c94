import React from 'react';
import AuditTableHeader from './AuditTableHeader';
import AuditListItem from './AuditListItem';

const AuditList = ({ audits }) => (
  <div className="bg-white shadow overflow-hidden rounded-lg">
    <table className="min-w-full divide-y divide-gray-200">
      <AuditTableHeader />
      <tbody className="bg-white divide-y divide-gray-200">
        {audits.map((audit) => (
          <AuditListItem key={audit.id} audit={audit} />
        ))}
      </tbody>
    </table>
  </div>
);

export default AuditList;