import React from 'react';
import { Shield, Lock, CheckCircle } from 'lucide-react';

interface SecurityBadgeProps {
  type: 'encrypted' | 'verified' | 'secured';
}

export default function SecurityBadge({ type }: SecurityBadgeProps) {
  const badges = {
    encrypted: {
      icon: Lock,
      text: 'End-to-End Encrypted',
      color: 'text-purple-600',
      bg: 'bg-purple-100'
    },
    verified: {
      icon: CheckCircle,
      text: 'Verified Vote',
      color: 'text-green-600',
      bg: 'bg-green-100'
    },
    secured: {
      icon: Shield,
      text: 'Blockchain Secured',
      color: 'text-blue-600',
      bg: 'bg-blue-100'
    }
  };

  const badge = badges[type];
  const Icon = badge.icon;

  return (
    <div className={`flex items-center ${badge.bg} ${badge.color} px-3 py-1 rounded-full text-sm`}>
      <Icon className="w-4 h-4 mr-1" />
      <span>{badge.text}</span>
    </div>
  );
}