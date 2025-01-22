import React from 'react';
import { Link } from 'react-router-dom';

const StatsCard = ({ stat }) => (
  <Link
    to={stat.link}
    className={`${stat.color} p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer`}
  >
    <h3 className="text-sm font-medium">{stat.name}</h3>
    <p className="mt-2 text-3xl font-semibold">{stat.value}</p>
  </Link>
);

export default StatsCard;