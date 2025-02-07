import { Vote, Voter, Party } from '../../types';
import { encryptData } from '../../utils/encryption';

export interface VoteState {
  votes: Vote[];
  lastVotedParty: Party | null;
}

export const createVoteSlice = (set: any, get: any) => ({
  votes: [],
  lastVotedParty: null,

  castVote: (currentVoter: Voter, partyId: number, parties: Party[]) => {
    if (!currentVoter) return;
    
    const party = parties.find(p => p.id === partyId);
    if (!party) return;

    // Create vote payload
    const votePayload = {
      voter: currentVoter.aadharNumber.slice(-4),
      party: party.shortName,
      timestamp: Date.now()
    };

    // Real-time encryption of vote data
    const encryptedVote = encryptData(JSON.stringify(votePayload));

    // Create vote record with audit log
    const newVote: Vote = {
      id: `vote_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      encryptedVote,
      timestamp: Date.now(),
      partyName: party.name,
      auditLog: JSON.stringify({
        voterHash: currentVoter.aadharNumber.slice(-4),
        timestamp: new Date().toISOString(),
        status: 'CONFIRMED'
      })
    };
    
    set((state: any) => ({
      votes: [...state.votes, newVote],
      lastVotedParty: party
    }));

    return newVote;
  },
});