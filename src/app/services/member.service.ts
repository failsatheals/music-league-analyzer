import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from 'src/models/league';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  members: Member[];
  constructor(private httpClient: HttpClient) {}

  findMemberByUserId(userId: string) {
    return this.members.filter((member) => member.user.id == userId)[0];
  }

  findMemberByUserName(userName: string) {
    return this.members.filter((member) => member.user.name == userName)[0];
  }

  loadMembersFile() {
    this.httpClient
      .get('assets/inputs/members.json')
      .subscribe((data: Member[]) => {
        this.members = data;
      });
  }
}
