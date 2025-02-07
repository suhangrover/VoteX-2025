import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Database, 
  Clock, 
  Shield, 
  Users, 
  Activity 
} from 'lucide-react';
import { useVoteStore } from '../../store/voteStore';

export default function SystemMetrics() {
  const { votes, voters } = useVoteStore();
  
  const metrics = [
    {
      icon: Activity,
      label: 'System Status',
      value: 'Operational',
      color: 'text-green-400'
    },
    {
      icon: Clock,
      label: 'Avg. Response Time',
      value: '124ms',
      color: 'text-blue-400'
    },
    {
      icon: Shield,
      label: 'Security Level',
      value: 'AES-256',
      color: 'text-purple-400'
    },
    {
      icon: Database,
      label: 'Total Transactions',
      value: votes.length.toString(),
      color: 'text-yellow-400'
    },
    {
      icon: Users,
      label: 'Registered Users',
      value: voters.length.toString(),
      color: 'text-pink-400'
    },
    {
      icon: Cpu,
      label: 'Server Load',
      value: '23%',
      color: 'text-indigo-400'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="glass-effect rounded-xl p-6"
        >
          <div className="flex items-center gap-3">
            <metric.icon className={`w-8 h-8 ${metric.color}`} />
            <div>
              <p className="text-sm text-gray-400">{metric.label}</p>
              <p className={`text-xl font-bold ${metric.color}`}>
                {metric.value}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}