import { Component } from '@angular/core';
import { Document } from './document';


@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
})
export class DocumentsComponent  {
  pageTitle: string = "Document Dashboard"

  documents: Document[] =  [
    {
      title: "My First Doc",
      description: "Dadadaddaudududu",
      file_url: "http://google.com",
      updated_at: '11/11/2018',
      image_url: "http://google.com"
    },
    {
      title: "My Second Doc",
      description: "Dadadaddaudududu",
      file_url: "http://google.com",
      updated_at: '11/11/2018',
      image_url: "http://google.com"
    },
    {
      title: "My Third Doc",
      description: "Dadadaddaudududu",
      file_url: "http://google.com",
      updated_at: '11/11/2018',
      image_url: "http://google.com"
    }

  ]


 }


// decorator give the ability to add metadata without defining them in the class itself