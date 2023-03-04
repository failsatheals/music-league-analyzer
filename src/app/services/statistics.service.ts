import { Injectable } from '@angular/core';
import { MemberService } from './member.service';
import { ResultService } from './result.service';
import { RoundService } from './round.service';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  getPointsPerRound() {
    const results = [];
    this.resultsServces.results.forEach((result) => {
      result.standings.forEach((standing) => {
        standing.votes.map((vote) => {});
      });
    });
  }
  constructor(
    private roundService: RoundService,
    private memberService: MemberService,
    private resultsServces: ResultService
  ) {}
}
// points
// most/least points per round
// most/least points per number of submitters
// most/least downvotes per round
// most/least downvotes per number of submitts
// most/least downvotes/upvotes total
// most lost points
// most/lease in general
// most max points in a round/overall// percentage of possible points? Who got the max in a single round

// comments
// most/least comments period
// most/least comments on a song
// most/lease comments on submission

// song
// submitted the most?
// most common artist
//

// show show submitted the fastest/slowest

// total points lost to people not voting
// show percentage of points allocated to all users totals
