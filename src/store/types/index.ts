export interface Voter {
  aadharNumber: string;
  name: string;
  hasVoted: boolean;
  votedParty?: string;
  lastLoginAttempt?: number;
  loginAttempts?: number;
  blockedUntil?: number;
}

export interface Party {
  id: number;
  name: string;
  symbol: string;
  shortName: string;
  color: string;
  leader: string;
}

export interface Vote {
  id?: string;
  encryptedVote: string;
  timestamp: number;
  partyName: string;
  blockHash?: string;
  auditLog?: string;
}

export interface VoteReceipt {
  receiptId: string;
  timestamp: number;
  blockHash: string;
}