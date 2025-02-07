import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import DevAuth from '../components/dev/DevAuth';
import SystemMetrics from '../components/dev/SystemMetrics';
import EncryptionVisualizer from '../components/dev/EncryptionVisualizer';
import BlockchainVisualizer from '../components/dev/BlockchainVisualizer';
import VoteTransactionVisualizer from '../components/dev/VoteTransactionVisualizer';
import VoterRegistry from '../components/dev/VoterRegistry';
import VoterRegistration from '../components/dev/VoterRegistration';

export default function DevDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return <DevAuth onAuth={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] p-4 pt-20">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <Code className="w-12 h-12 text-purple-400" />
            <h1 className="text-4xl font-bold ml-3 bg-gradient-to-r from-white to-purple-200 text-transparent bg-clip-text">
              Developer Dashboard
            </h1>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Advanced technical insights into the VoteX system, featuring real-time encryption,
            blockchain visualization, and system metrics.
          </p>
        </motion.div>

        <SystemMetrics />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <VoterRegistration />
          <VoterRegistry />
        </div>
        
        <VoteTransactionVisualizer />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <EncryptionVisualizer />
          <BlockchainVisualizer />
        </div>
      </div>
    </div>
  );
}