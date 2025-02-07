import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link2, Hash, Clock, Vote } from 'lucide-react';
import { useVoteStore } from '../../store/voteStore';

interface Block {
  hash: string;
  previousHash: string;
  timestamp: number;
  votes: number;
  nonce: number;
}

export default function BlockchainVisualizer() {
  const { votes } = useVoteStore();
  const [blocks, setBlocks] = useState<Block[]>([]);

  useEffect(() => {
    // Simulate blockchain creation from votes
    const blockSize = 3; // Votes per block
    const newBlocks: Block[] = [];
    
    for (let i = 0; i < votes.length; i += blockSize) {
      const blockVotes = votes.slice(i, i + blockSize);
      const previousHash = newBlocks.length > 0 ? newBlocks[newBlocks.length - 1].hash : '0000';
      
      const block: Block = {
        hash: generateHash(previousHash + i + Date.now()),
        previousHash,
        timestamp: Date.now(),
        votes: blockVotes.length,
        nonce: Math.floor(Math.random() * 1000000)
      };
      
      newBlocks.push(block);
    }
    
    setBlocks(newBlocks);
  }, [votes]);

  const generateHash = (data: string): string => {
    // Simulate SHA-256 hash (in production, use actual crypto functions)
    return Array.from(data)
      .reduce((hash, char) => ((hash << 5) - hash) + char.charCodeAt(0), 0)
      .toString(16)
      .padStart(64, '0');
  };

  return (
    <div className="glass-effect rounded-xl p-6">
      <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
        <Link2 className="w-5 h-5 text-purple-400" />
        Blockchain Structure
      </h3>

      <div className="space-y-4">
        {blocks.map((block, index) => (
          <motion.div
            key={block.hash}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-black/20 rounded-lg p-4 border border-white/10"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Hash className="w-4 h-4" />
                  <span>Block Hash:</span>
                </div>
                <p className="font-mono text-purple-400 text-sm truncate">
                  {block.hash}
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>Timestamp:</span>
                </div>
                <p className="font-mono text-blue-400 text-sm">
                  {new Date(block.timestamp).toLocaleTimeString()}
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Vote className="w-4 h-4" />
                  <span>Votes in Block:</span>
                </div>
                <p className="font-mono text-green-400 text-sm">
                  {block.votes}
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Hash className="w-4 h-4" />
                  <span>Nonce:</span>
                </div>
                <p className="font-mono text-yellow-400 text-sm">
                  {block.nonce}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}