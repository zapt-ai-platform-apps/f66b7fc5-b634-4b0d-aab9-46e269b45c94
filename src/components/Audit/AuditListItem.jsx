import React from 'react';
import { Link } from 'react-router-dom';
import { getStatusColor } from '../statusUtils';

const AuditListItem = ({ audit }) => (
  <tr>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
      {audit.round_name}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      {audit.site_name}
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      <span className={`${getStatusColor(audit.status)} px-2 inline-flex text-xs leading-5 font-semibold rounded-full`}>
        {audit.status}
      </span>
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      {audit.score}%
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      <span className="text-red-600 font-medium">{audit.critical_issues}</span>
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      <Link
        to={`/audits/${audit.id}`}
        className="text-blue-600 hover:text-blue-900 cursor-pointer mr-4"
      >
        View
      </Link>
      <Link
        to={`/audits/${audit.id}/action-plan`}
        className="text-green-600 hover:text-green-900 cursor-pointer"
      >
        Action Plan
      </Link>
    </td>
  </tr>
);

export default AuditListItem;