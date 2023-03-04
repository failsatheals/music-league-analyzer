import { Component } from '@angular/core';
import { Member, Result, Round } from 'src/models/league';
import { MemberService } from './services/member.service';
import { ResultService } from './services/result.service';
import { RoundService } from './services/round.service';
import { StatisticsService } from './services/statistics.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  rounds: Round[] = [];
  results: Result[] = [];
  members: Member[] = [];

  roundStatistics = [];
  memberStatistics = [];
  votesStatistics = [];
  commentStatistics = [];
  pointsStatistics: [] = [];

  resultFilesToRead = 23;

  constructor(
    private memberService: MemberService,
    private resultService: ResultService,
    private roundService: RoundService,
    private statisticsService: StatisticsService
  ) {}

  test() {}

  loadResultFiles() {
    this.resultService.loadResultFiles(this.resultFilesToRead);
    this.resultService.getMaxValues();
  }

  ngOnInit() {
    this.memberService.loadMembersFile();
    this.roundService.loadRoundsFile();

    console.log(this.rounds);
  }
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
