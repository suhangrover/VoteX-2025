import React, { useState } from 'react';
import { useVoteStore } from '../store/voteStore';
import { BarChart, Lock, Users, Activity, ChevronRight } from 'lucide-react';

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
        <div className="glass-effect rounded-2xl p-8 w-full max-w-md text-white">
          <div className="flex items-center justify-center mb-8">
            <Lock className="w-12 h-12 text-purple-400" />
            <h1 className="text-4xl font-bold ml-3">Admin Login</h1>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Admin Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-xl bg-white/10 border-transparent p-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
                required
                placeholder="Enter admin password"
              />
            </div>
            
            <button
              type="submit"
              className="w-full flex justify-center items-center py-3 px-4 rounded-xl text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
            >
              <ChevronRight className="w-5 h-5 mr-2" />
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  const voteCount = getTotalVotes();
  const totalVotes = Object.values(voteCount).reduce((a, b) => a + b, 0);
  const totalVoters = voters.length;
  const voterTurnout = totalVoters ? ((totalVotes / totalVoters) * 100).toFixed(1) : '0';

  return (
    <div className="min-h-[calc(100vh-4rem)] p-4">
      <div className="max-w-4xl mx-auto">
        <div className="glass-effect rounded-2xl p-8 text-white">
          <div className="flex items-center justify-center mb-8">
            <BarChart className="w-12 h-12 text-purple-400" />
            <h1 className="text-4xl font-bold ml-3">Election Statistics</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="glass-effect rounded-xl p-6">
              <div className="flex items-center mb-2">
                <Activity className="w-5 h-5 text-purple-400 mr-2" />
                <h3 className="font-medium text-gray-300">Total Votes</h3>
              </div>
              <p className="text-3xl font-bold text-white">{totalVotes}</p>
            </div>
            
            <div className="glass-effect rounded-xl p-6">
              <div className="flex items-center mb-2">
                <Users className="w-5 h-5 text-purple-400 mr-2" />
                <h3 className="font-medium text-gray-300">Registered Voters</h3>
              </div>
              <p className="text-3xl font-bold text-white">{totalVoters}</p>
            </div>
            
            <div className="glass-effect rounded-xl p-6">
              <div className="flex items-center mb-2">
                <BarChart className="w-5 h-5 text-purple-400 mr-2" />
                <h3 className="font-medium text-gray-300">Voter Turnout</h3>
              </div>
              <p className="text-3xl font-bold text-white">{voterTurnout}%</p>
            </div>
          </div>

          <div className="space-y-4">
            {parties.map((party) => {
              const votes = voteCount[party.id] || 0;
              const percentage = totalVotes ? ((votes / totalVotes) * 100).toFixed(1) : '0';
              
              return (
                <div key={party.id} className="glass-effect rounded-xl p-6">
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
                  <div className="w-full bg-white/5 rounded-full h-2.5">
                    <div
                      className="h-2.5 rounded-full bg-purple-600"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}