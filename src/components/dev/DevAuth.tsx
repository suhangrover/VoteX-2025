import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Lock, ChevronRight } from 'lucide-react';

interface DevAuthProps {
  onAuth: () => void;
}

export default function DevAuth({ onAuth }: DevAuthProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'dev123') {
      onAuth();
    } else {
      setError('Invalid developer password');
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-effect rounded-2xl p-8 w-full max-w-md"
      >
        <div className="flex items-center justify-center mb-8">
          <Code className="w-12 h-12 text-purple-400" />
          <h1 className="text-4xl font-bold ml-3 bg-gradient-to-r from-white to-purple-200 text-transparent bg-clip-text">
            Dev Access
          </h1>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              <div className="flex items-center space-x-2">
                <Lock className="w-4 h-4 text-purple-400" />
                <span>Developer Password</span>
              </div>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              required
              placeholder="Enter developer password"
            />
          </div>
          
          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 text-sm bg-red-900/20 p-3 rounded-lg"
            >
              {error}
            </motion.p>
          )}
          
          <button
            type="submit"
            className="btn-primary w-full"
          >
            <ChevronRight className="w-5 h-5" />
            <span>Access Dashboard</span>
          </button>
        </form>
      </motion.div>
    </div>
  );
}