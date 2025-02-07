import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ShieldCheck, ChevronLeft } from 'lucide-react';
import { useVoteStore } from '../../store/voteStore';

export default function SuccessPage() {
  const navigate = useNavigate();
  const lastVotedParty = useVoteStore(state => state.getLastVotedParty());

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-effect rounded-2xl p-8 w-full max-w-md text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          <CheckCircle className="w-16 h-16 text-purple-400 mx-auto mb-6" />
        </motion.div>
        
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 text-transparent bg-clip-text">
          Vote Cast Successfully!
        </h1>
        
        {lastVotedParty && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-effect rounded-xl p-6 mb-6"
          >
            <p className="text-lg text-gray-300 mb-3">
              You voted for:
            </p>
            <div className="flex items-center justify-center space-x-3">
              <span className="text-4xl">{lastVotedParty.symbol}</span>
              <span className="text-2xl font-bold text-purple-400">
                {lastVotedParty.shortName}
              </span>
            </div>
          </motion.div>
        )}

        <div className="flex items-center justify-center text-gray-300 mb-8">
          <ShieldCheck className="w-5 h-5 mr-2 text-purple-400" />
          <p>Your vote has been securely recorded and encrypted.</p>
        </div>

        <button
          onClick={() => navigate('/')}
          className="btn-primary mx-auto"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Home
        </button>
      </motion.div>
    </div>
  );
}