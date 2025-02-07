import React, { useEffect, useState } from 'react';
import { Vote } from 'lucide-react';
import { useVoteStore } from '../../../store/voteStore';
import TableHeader from './TableHeader';
import VoteRow from './VoteRow';

export default function VoteTransactionVisualizer() {
  const { votes, voters } = useVoteStore();
  const [displayedVotes, setDisplayedVotes] = useState(votes);

  useEffect(() => {
    setDisplayedVotes(votes);
  }, [votes]);

  const getVoterName = (voterHash: string) => {
    const voter = voters.find(v => v.aadharNumber.slice(-4) === voterHash);
    return voter ? voter.name : 'Unknown Voter';
  };

  return (
    <div className="glass-effect rounded-xl p-6">
      <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
        <Vote className="w-5 h-5 text-purple-400" />
        Live Vote Transaction Monitor
        <span className="ml-2 text-sm font-normal text-gray-400">
          ({displayedVotes.length} votes)
        </span>
      </h3>

      <div className="overflow-hidden">
        <div className="min-w-full divide-y divide-white/10">
          <TableHeader />

          <div className="divide-y divide-white/10">
            {displayedVotes.length === 0 ? (
              <div className="text-center py-8 text-gray-400">
                No votes have been cast yet. Cast a vote to see the encryption process.
              </div>
            ) : (
              displayedVotes.map((vote, index) => {
                const auditLog = JSON.parse(vote.auditLog || '{}');
                const voterName = getVoterName(auditLog.voterHash);
                
                return (
                  <VoteRow
                    key={vote.id || vote.timestamp}
                    timestamp={vote.timestamp}
                    voterName={voterName}
                    encryptedVote={vote.encryptedVote}
                    index={index}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}