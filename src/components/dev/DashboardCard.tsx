import React from 'react';
import { LucideIcon } from 'lucide-react';

interface DashboardCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  status: {
    color: string;
    text: string;
  };
}

export default function DashboardCard({ icon: Icon, title, description, status }: DashboardCardProps) {
  return (
    <div className="glass-effect rounded-xl p-6">
      <Icon className="w-8 h-8 text-purple-400 mb-4" />
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
      <div className="mt-4 flex items-center">
        <div className={`w-2 h-2 ${status.color} rounded-full mr-2`}></div>
        <span className={status.color.replace('bg-', 'text-')}>{status.text}</span>
      </div>
    </div>
  );
}