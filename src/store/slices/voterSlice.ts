import { Voter } from '../../types';

const mockVoters: Voter[] = [
  { aadharNumber: '123456789012', name: 'Rajesh Kumar', hasVoted: false },
  { aadharNumber: '987654321098', name: 'Priya Sharma', hasVoted: false },
  { aadharNumber: '456789123012', name: 'Amit Patel', hasVoted: false },
  { aadharNumber: '789123456012', name: 'Sneha Reddy', hasVoted: false },
];

export interface VoterState {
  voters: Voter[];
  currentVoter: Voter | null;
}

export const createVoterSlice = (set: any) => ({
  voters: mockVoters,
  currentVoter: null,

  setCurrentVoter: (voter: Voter | null) => set({ currentVoter: voter }),
  
  markVoterAsVoted: (aadharNumber: string) => 
    set((state: any) => ({
      voters: state.voters.map((voter: Voter) =>
        voter.aadharNumber === aadharNumber
          ? { ...voter, hasVoted: true }
          : voter
      ),
      currentVoter: null
    })),
});