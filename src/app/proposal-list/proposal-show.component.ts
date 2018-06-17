import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Proposal } from './proposal';

@Component({
  selector: "proposal-show",
  templateUrl: "proposal-show.component.html",
  styleUrls: ['proposal-show.component.css']

})

export class ProposalShowComponent implements OnInit{
  id: any;
  routeId: any;

  constructor(
    private route: ActivatedRoute
  ){}
  
  ngOnInit(): void {
    this.routeId = this.route.params.subscribe(
      params => {
        this.id = +params['id'];
      } 
    )
  }
}

//oninit pulls the value from the route
// subscribe gives us the access to the object we want to communicate with, here we want to pull in the parameters from the route, and inside of this put an anonymous function