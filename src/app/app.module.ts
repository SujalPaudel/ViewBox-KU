import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentService } from './documents/document.service';
import { ProposalListComponent } from './proposal-list/proposal-list.component';
import { ProposalNewComponent } from './proposal-list/proposal-new.component';
import { ProposalShowComponent } from './proposal-list/proposal-show.component';
import { ProposalService } from './proposal-list/proposal.service'


import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DocumentsComponent,
    ProposalListComponent,
    ProposalNewComponent,
    ProposalShowComponent,

    //HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [
    DocumentService,
    ProposalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
