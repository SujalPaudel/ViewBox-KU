import { Component, OnInit } from '@angular/core';
import { Document } from './document';
import { map, filter, scan } from 'rxjs/operators';
import { timer, Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { DocumentService } from './document.service';


@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['documents.component.css'],
  providers: [ DocumentService ]
})
export class DocumentsComponent implements OnInit  {
  pageTitle: string = "Document Dashboard"

  documents: Document[];
  errorMessage : string;
  mode = "Observable";
  constructor(
    private documentService : DocumentService
    ){}

  ngOnInit(){
    let tick = timer(0, 5000);
    tick.subscribe(() => this.getDocuments());
  }

  getDocuments(){
    this.documentService.getDocuments()
        .subscribe(
          documents => this.documents = documents,
          error => this.errorMessage = <any>error
          );
  }

 }

// subscribe is communicating with the stream process, when working with the observable and we want them to subscribe
// providers means what is providing the data
// decorator give the ability to add metadata without defining them in the class itself