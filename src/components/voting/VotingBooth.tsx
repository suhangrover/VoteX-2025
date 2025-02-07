import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Vote, Shield, ChevronRight } from 'lucide-react';
import { useVoteStore } from '../../store/voteStore';

export default function VotingBooth() {
  const { currentVoter, parties, castVote } = useVoteStore();
  const navigate = useNavigate();
  const [selectedParty, setSelectedParty] = React.useState<number | null>(null);

  useEffect(() => {
    if (!currentVoter) {
      navigate('/login');
    }
  }, [currentVoter, navigate]);

  if (!currentVoter) {
    return null;
  }

  const handleVote = () => {
    if (selectedParty !== null) {
      castVote(selectedParty);
      navigate('/success');
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] p-4 pt-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-effect rounded-2xl p-8"
        >
          <div className="flex items-center justify-center mb-8">
            <Vote className="w-12 h-12 text-purple-400" />
            <h1 className="text-4xl font-bold ml-3 bg-gradient-to-r from-white to-purple-200 text-transparent bg-clip-text">
              Cast Your Vote
            </h1>
          </div>

          <div className="mb-8">
            <p className="text-xl text-purple-300">Welcome, {currentVoter.name}</p>
            <p className="text-sm text-gray-400 mt-1">Select your preferred party to cast your vote</p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {parties.map((party) => (
              <motion.button
                key={party.id}
                onClick={() => setSelectedParty(party.id)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`party-card flex items-center p-6 rounded-xl transition-all ${
                  selectedParty === party.id 
                    ? 'bg-purple-600/30 border-2 border-purple-500' 
                    : 'bg-white/5 border border-white/10 hover:bg-white/10'
                }`}
              >
                <span className="text-4xl mr-4">{party.symbol}</span>
                <div className="flex-1 text-left">
                  <div className="flex items-center">
                    <span className="text-xl font-medium">{party.name}</span>
                    <span className="ml-2 px-2 py-1 bg-white/10 rounded-lg text-sm">
                      {party.shortName}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mt-1 text-left">Leader: {party.leader}</p>
                </div>
                {selectedParty === party.id && (
                  <ChevronRight className="w-6 h-6 text-purple-400" />
                )}
              </motion.button>
            ))}
          </div>

          <div className="mt-8 flex justify-between items-center">
            <div className="flex items-center text-sm text-gray-400">
              <Shield className="w-4 h-4 mr-2 text-purple-400" />
              <span>Your vote is encrypted and secure</span>
            </div>
            <button
              onClick={handleVote}
              disabled={selectedParty === null}
              className={`btn-primary ${
                selectedParty === null
                  ? 'opacity-50 cursor-not-allowed'
                  : ''
              }`}
            >
              <span>Confirm Vote</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}