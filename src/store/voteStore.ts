import { create } from 'zustand';
import { Party, Vote, Voter } from '../types';
import { encryptData } from '../utils/encryption';

const parties: Party[] = [
  { 
    id: 1, 
    name: 'Bharatiya Janata Party', 
    shortName: 'BJP',
    symbol: '🌸', 
    color: '#FF9933',
    leader: 'Narendra Modi'
  },
  { 
    id: 2, 
    name: 'Indian National Congress', 
    shortName: 'INC',
    symbol: '✋', 
    color: '#138808',
    leader: 'Mallikarjun Kharge'
  },
  { 
    id: 3, 
    name: 'Nationalist Congress Party', 
    shortName: 'NCP',
    symbol: '⭕', 
    color: '#0066CC',
    leader: 'Sharad Pawar'
  },
  { 
    id: 4, 
    name: 'Communist Party of India (Marxist)', 
    shortName: 'CPI(M)',
    symbol: '⚒️', 
    color: '#FF0000',
    leader: 'Sitaram Yechury'
  },
  { 
    id: 5, 
    name: 'Aam Aadmi Party', 
    shortName: 'AAP',
    symbol: '🧹', 
    color: '#2E338C',
    leader: 'Arvind Kejriwal'
  },
];

const mockVoters: Voter[] = [
  { aadharNumber: '123456789012', name: 'Rajesh Kumar', hasVoted: false },
  { aadharNumber: '987654321098', name: 'Priya Sharma', hasVoted: false },
  { aadharNumber: '456789123012', name: 'Amit Patel', hasVoted: false },
  { aadharNumber: '789123456012', name: 'Sneha Reddy', hasVoted: false },
];

interface VoteStore {
  // State
  voters: Voter[];
  currentVoter: Voter | null;
  votes: Vote[];
  parties: Party[];
  lastVotedParty: Party | null;

  // Actions
  setCurrentVoter: (voter: Voter | null) => void;
  castVote: (partyId: number) => void;
  getTotalVotes: () => Record<number, number>;
  getLastVotedParty: () => Party | null;
  registerVoter: (voter: Voter) => void;
}

export const useVoteStore = create<VoteStore>((set, get) => ({
  // Initial state
  voters: mockVoters,
  currentVoter: null,
  votes: [],
  parties,
  lastVotedParty: null,

  // Actions
  setCurrentVoter: (voter) => set({ currentVoter: voter }),

  registerVoter: (voter) => {
    set((state) => ({
      voters: [...state.voters, voter]
    }));
  },

  castVote: (partyId) => {
    const { currentVoter, parties, votes } = get();
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

    // Update state
    set((state) => ({
      votes: [...state.votes, newVote],
      lastVotedParty: party,
      voters: state.voters.map(voter =>
        voter.aadharNumber === currentVoter.aadharNumber
          ? { ...voter, hasVoted: true }
          : voter
      ),
      currentVoter: null
    }));
  },

  getTotalVotes: () => {
    const { votes, parties } = get();
    return votes.reduce((totals: Record<number, number>, vote) => {
      const party = parties.find(p => p.name === vote.partyName);
      if (party) {
        totals[party.id] = (totals[party.id] || 0) + 1;
      }
      return totals;
    }, {});
  },

  getLastVotedParty: () => get().lastVotedParty,
}));