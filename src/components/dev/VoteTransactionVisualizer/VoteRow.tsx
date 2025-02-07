import React from 'react';
import { motion } from 'framer-motion';

interface VoteRowProps {
  timestamp: number;
  voterName: string;
  encryptedVote: string;
  index: number;
}

export default function VoteRow({ timestamp, voterName, encryptedVote, index }: VoteRowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-white/5 transition-colors"
    >
      <div className="col-span-1 flex items-center text-gray-400 text-sm">
        {new Date(timestamp).toLocaleTimeString([], { 
          hour: '2-digit', 
          minute: '2-digit' 
        })}
      </div>
      <div className="col-span-4 flex items-center">
        <span className="text-white">{voterName}</span>
      </div>
      <div className="col-span-7">
        <div className="font-mono text-xs bg-black/30 p-2 rounded border border-white/5">
          <p className="text-purple-400 break-all">{encryptedVote}</p>
        </div>
      </div>
    </motion.div>
  );
}