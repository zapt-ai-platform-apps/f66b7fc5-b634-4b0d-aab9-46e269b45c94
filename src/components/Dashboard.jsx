import React from 'react';
import StatsCard from './Dashboard/StatsCard';
import RecentActivity from './Dashboard/RecentActivity';

export default function Dashboard() {
  const stats = [
    { name: 'Open Audits', value: '12', link: '/audits', color: 'bg-blue-100 text-blue-800' },
    { name: 'Critical Issues', value: '3', link: '/audits', color: 'bg-red-100 text-red-800' },
    { name: 'Pending Incidents', value: '5', link: '/incidents', color: 'bg-yellow-100 text-yellow-800' },
    { name: 'Expiring Certs', value: '2', link: '/registry', color: 'bg-green-100 text-green-800' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <StatsCard key={stat.name} stat={stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <RecentActivity
          title="Recent Audits"
          items={[1, 2, 3]}
          statusLabel="Critical"
          statusColor="bg-red-100 text-red-800"
        />
        
        <RecentActivity
          title="Recent Incidents"
          items={[1, 2, 3]}
          statusLabel="Pending"
          statusColor="bg-yellow-100 text-yellow-800"
        />
      </div>
    </div>
  );
}