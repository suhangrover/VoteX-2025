import React from 'react';
import { motion } from 'framer-motion';
import { Users, UserCheck, UserX, Shield } from 'lucide-react';
import { useVoteStore } from '../../store/voteStore';

export default function VoterRegistry() {
  const { voters } = useVoteStore();

  return (
    <div className="glass-effect rounded-xl p-6">
      <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
        <Users className="w-5 h-5 text-purple-400" />
        Registered Voters
      </h3>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-white/10">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Aadhar Number
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Security
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {voters.map((voter, index) => (
              <motion.tr
                key={voter.aadharNumber}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="hover:bg-white/5 transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-purple-600/20 flex items-center justify-center">
                      {voter.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-white">{voter.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-300 font-mono">
                    {voter.aadharNumber.replace(/(\d{4})/g, '$1 ').trim()}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {voter.hasVoted ? (
                      <>
                        <UserCheck className="w-4 h-4 text-green-400 mr-2" />
                        <span className="text-green-400 text-sm">Voted</span>
                      </>
                    ) : (
                      <>
                        <UserX className="w-4 h-4 text-yellow-400 mr-2" />
                        <span className="text-yellow-400 text-sm">Not Voted</span>
                      </>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center text-sm text-gray-300">
                    <Shield className="w-4 h-4 text-purple-400 mr-2" />
                    <span>Verified</span>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 pt-4 border-t border-white/10">
        <div className="flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>Total Registered: {voters.length}</span>
          </div>
          <div className="flex items-center gap-2">
            <UserCheck className="w-4 h-4" />
            <span>
              Voted: {voters.filter(v => v.hasVoted).length} ({Math.round((voters.filter(v => v.hasVoted).length / voters.length) * 100)}%)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}