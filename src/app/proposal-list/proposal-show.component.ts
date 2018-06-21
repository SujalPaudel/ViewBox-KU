import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators'

import { Proposal } from './proposal';
import { ProposalService } from './proposal.service';

@Component({
  selector: "proposal-show",
  templateUrl: "proposal-show.component.html",
  styleUrls: ['proposal-show.component.css']

})

export class ProposalShowComponent implements OnInit{
  constructor(
    private http: Http,
    private proposalService : ProposalService,
    private route : ActivatedRoute
  ){}
  
  @Input()  // to scale up the Proposal its needed
  proposal:Proposal;

  ngOnInit(): void {
    let proposalRequest = this.route.params
          .pipe(flatMap((params:Params) => 
            this.proposalService.getProposal(+params['id']))
          );
    proposalRequest.subscribe(response => this.proposal = response.json());
  
  }
}

//oninit pulls the value from the route
// subscribe gives us the access to the object we want to communicate with, here we want to pull in the parameters from the route, and inside of this put an anonymous function
// Mapping is used for the mapping of the observables