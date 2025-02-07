import React from 'react';
import { motion } from 'framer-motion';
import { Vote, Lock, Clock } from 'lucide-react';
import { useVoteStore } from '../../store/voteStore';

export default function VoteTransactionVisualizer() {
  const { votes, voters } = useVoteStore();

  // Get voter name from Aadhar number (last 4 digits)
  const getVoterName = (voterHash: string) => {
    const voter = voters.find(v => v.aadharNumber.slice(-4) === voterHash);
    return voter ? voter.name : 'Unknown Voter';
  };

  return (
    <div className="glass-effect rounded-xl p-6">
      <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
        <Vote className="w-5 h-5 text-purple-400" />
        Live Vote Transaction Monitor
      </h3>

      <div className="overflow-hidden">
        <div className="min-w-full divide-y divide-white/10">
          <div className="bg-white/5 rounded-t-lg">
            <div className="grid grid-cols-12 gap-4 px-6 py-3">
              <div className="col-span-1">
                <Clock className="w-4 h-4 text-gray-400" />
              </div>
              <div className="col-span-4 text-left text-sm font-semibold text-gray-300">
                Voter Name
              </div>
              <div className="col-span-7 text-left text-sm font-semibold text-gray-300 flex items-center gap-2">
                <Lock className="w-4 h-4 text-purple-400" />
                <span>Encrypted Vote Data</span>
              </div>
            </div>
          </div>

          <div className="divide-y divide-white/10">
            {votes.length === 0 ? (
              <div className="text-center py-8 text-gray-400">
                No votes have been cast yet. Cast a vote to see the encryption process.
              </div>
            ) : (
              votes.map((vote, index) => {
                const auditLog = JSON.parse(vote.auditLog || '{}');
                const voterName = getVoterName(auditLog.voterHash);
                
                return (
                  <motion.div
                    key={vote.timestamp}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-white/5 transition-colors"
                  >
                    <div className="col-span-1 flex items-center text-gray-400 text-sm">
                      {new Date(vote.timestamp).toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </div>
                    <div className="col-span-4 flex items-center">
                      <span className="text-white">{voterName}</span>
                    </div>
                    <div className="col-span-7">
                      <div className="font-mono text-xs bg-black/30 p-2 rounded border border-white/5">
                        <p className="text-purple-400 break-all">{vote.encryptedVote}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}