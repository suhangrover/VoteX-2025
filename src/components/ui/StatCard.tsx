import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
}

export default function StatCard({ icon: Icon, title, value }: StatCardProps) {
  return (
    <div className="glass-effect rounded-xl p-6">
      <Icon className="w-8 h-8 text-purple-400 mb-4" />
      <h4 className="text-2xl font-bold text-white mb-2">{value}</h4>
      <p className="text-gray-400">{title}</p>
    </div>
  );
}