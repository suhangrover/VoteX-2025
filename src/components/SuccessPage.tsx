import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ShieldCheck, ChevronLeft } from 'lucide-react';
import { useVoteStore } from '../store/voteStore';

export default function SuccessPage() {
  const navigate = useNavigate();
  const lastVotedParty = useVoteStore(state => state.getLastVotedParty());

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
      <div className="glass-effect rounded-2xl p-8 w-full max-w-md text-center text-white">
        <CheckCircle className="w-16 h-16 text-purple-400 mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-4">Vote Cast Successfully!</h1>
        
        {lastVotedParty && (
          <div className="glass-effect rounded-xl p-6 mb-6">
            <p className="text-lg text-gray-300 mb-3">
              You voted for:
            </p>
            <div className="flex items-center justify-center space-x-3">
              <span className="text-4xl">{lastVotedParty.symbol}</span>
              <span className="text-2xl font-bold text-purple-400">
                {lastVotedParty.shortName}
              </span>
            </div>
          </div>
        )}

        <div className="flex items-center justify-center text-gray-300 mb-8">
          <ShieldCheck className="w-5 h-5 mr-2 text-purple-400" />
          <p>Your vote has been securely recorded and encrypted.</p>
        </div>

        <button
          onClick={() => navigate('/')}
          className="flex items-center justify-center px-6 py-3 mx-auto bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to Home
        </button>
      </div>
    </div>
  );
}