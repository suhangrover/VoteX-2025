import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Lock, Users, Activity, ChevronRight, Shield, PieChart } from 'lucide-react';
import { useVoteStore } from '../../store/voteStore';

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const { parties, getTotalVotes, voters } = useVoteStore();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-effect rounded-2xl p-8 w-full max-w-md"
        >
          <div className="flex items-center justify-center mb-8">
            <Lock className="w-12 h-12 text-purple-400" />
            <h1 className="text-4xl font-bold ml-3 bg-gradient-to-r from-white to-purple-200 text-transparent bg-clip-text">
              Admin Login
            </h1>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-purple-400" />
                  <span>Admin Password</span>
                </div>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                required
                placeholder="Enter admin password"
              />
            </div>
            
            <button
              type="submit"
              className="btn-primary w-full"
            >
              <ChevronRight className="w-5 h-5" />
              <span>Login</span>
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  const voteCount = getTotalVotes();
  const totalVotes = Object.values(voteCount).reduce((a, b) => a + b, 0);
  const totalVoters = voters.length;
  const voterTurnout = totalVoters ? ((totalVotes / totalVoters) * 100).toFixed(1) : '0';

  return (
    <div className="min-h-[calc(100vh-4rem)] p-4 pt-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-effect rounded-2xl p-8"
        >
          <div className="flex items-center justify-center mb-8">
            <BarChart className="w-12 h-12 text-purple-400" />
            <h1 className="text-4xl font-bold ml-3 bg-gradient-to-r from-white to-purple-200 text-transparent bg-clip-text">
              Election Statistics
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-effect rounded-xl p-6"
            >
              <div className="flex items-center mb-2">
                <Activity className="w-5 h-5 text-purple-400 mr-2" />
                <h3 className="font-medium text-gray-300">Total Votes</h3>
              </div>
              <p className="text-3xl font-bold text-white">{totalVotes}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-effect rounded-xl p-6"
            >
              <div className="flex items-center mb-2">
                <Users className="w-5 h-5 text-purple-400 mr-2" />
                <h3 className="font-medium text-gray-300">Registered Voters</h3>
              </div>
              <p className="text-3xl font-bold text-white">{totalVoters}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-effect rounded-xl p-6"
            >
              <div className="flex items-center mb-2">
                <PieChart className="w-5 h-5 text-purple-400 mr-2" />
                <h3 className="font-medium text-gray-300">Voter Turnout</h3>
              </div>
              <p className="text-3xl font-bold text-white">{voterTurnout}%</p>
            </motion.div>
          </div>

          <div className="space-y-4">
            {parties.map((party, index) => {
              const votes = voteCount[party.id] || 0;
              const percentage = totalVotes ? ((votes / totalVotes) * 100).toFixed(1) : '0';
              
              return (
                <motion.div
                  key={party.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 1) }}
                  className="glass-effect rounded-xl p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-3xl mr-3">{party.symbol}</span>
                      <div>
                        <div className="flex items-center">
                          <span className="font-medium text-lg">{party.name}</span>
                          <span className="ml-2 px-2 py-1 bg-white/10 rounded-lg text-sm">
                            {party.shortName}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400 mt-1">Leader: {party.leader}</p>
                      </div>
                    </div>
                    <span className="text-xl font-bold">{votes} votes ({percentage}%)</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-2.5 rounded-full bg-purple-600"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}