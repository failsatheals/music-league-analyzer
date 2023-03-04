import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Round } from 'src/models/league';

@Injectable({
  providedIn: 'root',
})
export class RoundService {
  rounds: Round[] = [];
  constructor(private httpClient: HttpClient) {}
  loadRoundsFile() {
    this.httpClient
      .get('assets/inputs/rounds.json')
      .subscribe((data: Round[]) => {
        this.rounds = data;
      });
  }
  findRoundBySequence(sequcne: number) {
    return this.rounds.filter((round) => round.sequence == sequcne)[0];
  }
}
