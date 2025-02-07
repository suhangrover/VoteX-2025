import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useVoteStore } from '../store/voteStore';
import { Vote, User } from 'lucide-react';

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
      <div className="glass-effect rounded-2xl p-8 w-full max-w-md text-white">
        <div className="flex items-center justify-center mb-8">
          <Vote className="w-12 h-12 text-purple-400" />
          <h1 className="text-4xl font-bold ml-3">Login</h1>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Aadhar Number
            </label>
            <input
              type="text"
              value={aadhar}
              onChange={(e) => setAadhar(e.target.value)}
              pattern="[0-9]{12}"
              maxLength={12}
              className="mt-1 block w-full rounded-xl bg-white/10 border-transparent p-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
              required
              placeholder="Enter your 12-digit Aadhar number"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-xl bg-white/10 border-transparent p-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
              required
              placeholder="Enter your full name"
            />
          </div>
          
          {error && (
            <p className="text-red-400 text-sm bg-red-900/20 p-3 rounded-lg">{error}</p>
          )}
          
          <button
            type="submit"
            className="w-full flex justify-center items-center py-3 px-4 rounded-xl text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
          >
            <User className="w-5 h-5 mr-2" />
            Login to Vote
          </button>
        </form>
      </div>
    </div>
  );
}