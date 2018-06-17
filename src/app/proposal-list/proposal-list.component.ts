import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['proposal-list.component.css']

})
export class ProposalListComponent{
  proposalOne = new Proposal(1, "ABC Company Ltd", "portfolio.sujal.com", "Ruby on the Rails", 150, 120, 15, "rajesh@gmail.com")
  proposalTwo = new Proposal(2, "Cool and the hot Company Ltd", "portfolio.shahrukh.com", "Ruby on the Rails", 150, 120, 15, "whatnot@gmail.com")
  proposalThree = new Proposal(3, "Log Company Ltd", "portfolio.santabanta.com", "Angular", 150, 120, 15, "tiger@gmail.com")

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ]

}
