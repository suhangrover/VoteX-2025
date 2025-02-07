import { Vote } from '../types';

export const generateAuditLog = (vote: Vote): string => {
  return JSON.stringify({
    timestamp: new Date().toISOString(),
    voteHash: hashVote(vote),
    blockNumber: generateBlockNumber()
  });
};

const hashVote = (vote: Vote): string => {
  const data = `${vote.encryptedVote}-${vote.timestamp}`;
  return btoa(data); // In production, use a proper hashing algorithm
};

const generateBlockNumber = (): string => {
  return Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
};