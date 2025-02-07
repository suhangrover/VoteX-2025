import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserPlus, AlertCircle, CheckCircle } from 'lucide-react';
import { useVoteStore } from '../../store/voteStore';
import { validateAadhar, validateName } from '../../utils/validation';

export default function VoterRegistration() {
  const [name, setName] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const { voters, registerVoter } = useVoteStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validate inputs
    if (!validateName(name)) {
      setError('Invalid name format. Use only letters and spaces.');
      return;
    }

    if (!validateAadhar(aadhar)) {
      setError('Invalid Aadhar number. Must be 12 digits.');
      return;
    }

    // Check if voter already exists
    if (voters.some(v => v.aadharNumber === aadhar)) {
      setError('A voter with this Aadhar number already exists.');
      return;
    }

    // Register voter
    registerVoter({ name, aadharNumber: aadhar, hasVoted: false });
    setSuccess('Voter registered successfully!');
    setName('');
    setAadhar('');
  };

  return (
    <div className="glass-effect rounded-xl p-6">
      <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
        <UserPlus className="w-5 h-5 text-purple-400" />
        Register New Voter
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Full Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
            placeholder="Enter voter's full name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Aadhar Number
          </label>
          <input
            type="text"
            value={aadhar}
            onChange={(e) => setAadhar(e.target.value)}
            className="input-field"
            placeholder="Enter 12-digit Aadhar number"
            maxLength={12}
            pattern="\d{12}"
            required
          />
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg"
          >
            <AlertCircle className="w-4 h-4" />
            <span>{error}</span>
          </motion.div>
        )}

        {success && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-green-400 bg-green-400/10 p-3 rounded-lg"
          >
            <CheckCircle className="w-4 h-4" />
            <span>{success}</span>
          </motion.div>
        )}

        <button type="submit" className="btn-primary w-full">
          <UserPlus className="w-5 h-5" />
          <span>Register Voter</span>
        </button>
      </form>
    </div>
  );
}