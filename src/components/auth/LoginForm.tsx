import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Vote, User, Lock, ChevronRight } from 'lucide-react';
import { useVoteStore } from '../../store/voteStore';
import { validateAadhar, validateName } from '../../utils/validation';

export default function LoginForm() {
  const [aadhar, setAadhar] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  
  const { voters, setCurrentVoter } = useVoteStore();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const voter = voters.find(v => 
      v.aadharNumber === aadhar && 
      v.name.toLowerCase() === name.toLowerCase()
    );
    
    if (!voter) {
      setError('Invalid credentials or voter not registered');
      return;
    }
    
    if (voter.hasVoted) {
      setError('You have already cast your vote');
      return;
    }
    
    setCurrentVoter(voter);
    navigate('/vote');
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-effect rounded-2xl p-8 w-full max-w-md"
      >
        <div className="flex items-center justify-center mb-8">
          <Vote className="w-12 h-12 text-purple-400" />
          <h1 className="text-4xl font-bold ml-3 bg-gradient-to-r from-white to-purple-200 text-transparent bg-clip-text">
            Login
          </h1>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4 text-purple-400" />
                <span>Aadhar Number</span>
              </div>
            </label>
            <input
              type="text"
              value={aadhar}
              onChange={(e) => setAadhar(e.target.value)}
              pattern="[0-9]{12}"
              maxLength={12}
              className="input-field"
              required
              placeholder="Enter your 12-digit Aadhar number"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              <div className="flex items-center space-x-2">
                <Lock className="w-4 h-4 text-purple-400" />
                <span>Full Name</span>
              </div>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-field"
              required
              placeholder="Enter your full name"
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
            <span>Login to Vote</span>
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Need help? Contact your local election office
          </p>
        </div>
      </motion.div>
    </div>
  );
}