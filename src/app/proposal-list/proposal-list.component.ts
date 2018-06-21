import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proposal } from './proposal';  
import { map, filter, scan } from 'rxjs/operators';
import { timer, Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { ProposalService } from './proposal.service';

@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['proposal-list.component.css'],
  providers: [ ProposalService ]

})
export class ProposalListComponent implements OnInit{
  proposals: Proposal[];
  errorMessage : string;
  mode = "Observable";
  constructor(
    private proposalService : ProposalService,
    private router : Router
  ){}

  ngOnInit(){
    let tick = timer(0, 5000);
    tick.subscribe(() => this.getProposals());
  }

  getProposals(){
    this.proposalService.getProposals()
        .subscribe(
          proposals => this.proposals = proposals,
          error => this.errorMessage = <any>error
          );
  }

  goToShow(proposal : Proposal) : void{
    let link = ['/proposal', proposal.id ];
    this.router.navigate(link);

  }
}

