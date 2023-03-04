// export interface PointStatistics {
//   allRounds: AllRound[];
//   perRound: PerRound[];
// }
// interface AllRound extends PointRound {}
// interface PointRound extends Point, Round {}
// interface Point extends Member {
//   weightActual: number;
//   spotifyUri: string;
//   weightPossible: number;
//   votes: number;
// }

// interface PerRound extends Round {
//   most?: Point;
//   least?: Point;
//   mostNoVote?: Point;
//   leastNoVote?: Point;
// }

// export interface MemberStatistics {
//   member: Member;
//   points: MemberPoints;
//   votes: MemberVotes;
// }

// export interface MemberPoints {
//   gained: PointRound[];
//   lost: PointRound[];
// }

// export interface MemberVotes {
//   received: Vote[];
//   given: Vote[];
// }

// export interface Vote extends Member {
//   weightPossible: number;
//   weightActual: number;
//   spotifyUri: string;
//   round: number;
//   roundId: string;
//   roundStart: string;
// }

export interface RoundOptional {
  maxSubmitters?: number;
  maxVoters?: number;
}

export interface MemberOptional {
  leftLeague?: boolean;
}

// Everything below this is exactly as Music League uses
export interface Round extends RoundOptional {
  id: string;
  name: string;
  completed: string;
  description: string;
  downvotesPerUser: number;
  highStakes: boolean;
  leagueId: string;
  maxDownvotesPerSong: number;
  maxUpvotesPerSong: number;
  playlistUrl: string;
  sequence: number;
  songsPerUser: number;
  startDate: number;
  status: string;
  submissionsDue: string;
  upvotesPerUser: number;
  votesDue: string;
  templateId: string;
}
export interface StandingFileData {
  standings: Standing[];
}
export interface Standing {
  pointsActual: number;
  pointsPossible: number;
  rank: number;
  submission: Submission;
  submitterVoted: boolean;
  tieBreaker: string;
  votes: Vote[];
}

export interface Submission {
  created: string;
  submitterId: string;
  member?: Member;
  spotifyUri: string;
  comment: string;
  commentVisibility: '';
}

export interface Vote {
  comment: string;
  created: string;
  spotifyUri: string;
  voterId: string;
  member?: Member;
  weight: number;
}

export interface Result {
  round: Round;
  standings: Standing[];
}

export interface Member extends MemberOptional {
  created: string;
  isAdmin: boolean;
  isPlayer: boolean;
  user: User;
}

export interface User {
  id: string;
  name: string;
  profileImage: string;
}
