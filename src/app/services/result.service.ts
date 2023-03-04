import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result, StandingFileData } from 'src/models/league';
import { MemberService } from './member.service';
import { RoundService } from './round.service';

@Injectable({
  providedIn: 'root',
})
export class ResultService {
  results: Result[] = [];
  resultFilesToRead: number;

  constructor(
    private httpClient: HttpClient,
    private roundService: RoundService,
    private memberService: MemberService
  ) {}

  getResultsBySequence(sequence: number) {
    const result = this.results.filter((result) => {
      console.log(result.round.sequence);
      console.log(sequence);
      return result.round.sequence == sequence;
    });

    if (result.length > 1) {
      console.log(
        `There are multiple results with an identical sequence of: ${sequence}`
      );
    }
    if (result.length == 0) {
      console.log(`No results found with the sequence of: ${sequence}`);
    }
    return result[0];
  }

  getMemberUserNameInResult(result: Result) {
    return result.standings.map(
      (standing) => standing.submission.member.user.name
    );
  }

  loadResultFiles(resultFilesToRead) {
    this.results.length = 0;
    for (let f = 1; f < resultFilesToRead + 1; f++) {
      this.httpClient
        .get(`assets/inputs/results-${f}.json`)
        .subscribe((data: StandingFileData) => {
          const round = this.roundService.findRoundBySequence(f);
          data.standings.forEach((standing) => {
            standing.submission.member = this.memberService.findMemberByUserId(
              standing.submission.submitterId
            );

            standing.votes.forEach((vote) => {
              vote.member = this.memberService.findMemberByUserId(vote.voterId);
            });
          });
          this.results.push({ round, standings: data.standings });
        });
    }

    console.log(this.results);
  }

  getMaxValues() {
    this.results.forEach((result) => {
      let firstStandingPlayerId = '';
      let maxDownvotesPerSong = 0;
      let maxUpvotesPerSong = 0;
      let maxSubmitters = 0;
      let maxVoters = 0;
      let upvotesPerUser = 0;
      let downvotesPerUser = 0;

      result.standings.forEach((standing, i) => {
        if (standing.rank == 1) {
          firstStandingPlayerId = standing.submission.submitterId;
        }
        maxSubmitters++;
        if (standing.submitterVoted) {
          maxVoters++;
        }
        standing.votes.forEach((vote) => {
          if (vote.weight > 0) {
            if (vote.voterId === firstStandingPlayerId) {
              upvotesPerUser += vote.weight;
            }
            if (vote.weight > maxUpvotesPerSong) {
              maxUpvotesPerSong = vote.weight;
            }
          }
          if (vote.weight < 0) {
            if (vote.voterId === firstStandingPlayerId) {
              downvotesPerUser += Math.abs(vote.weight);
            }
            if (vote.weight < maxDownvotesPerSong) {
              maxDownvotesPerSong = Math.abs(vote.weight);
            }
          }
        });
      });
      result.round = {
        ...result.round,
        maxDownvotesPerSong,
        maxUpvotesPerSong,
        maxSubmitters,
        maxVoters,
        upvotesPerUser,
        downvotesPerUser,
      };
    });
  }
}
