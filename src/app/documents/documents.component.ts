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
      image_url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg"
    },
    {
      title: "My Second Doc",
      description: "Dadadaddaudududu",
      file_url: "http://google.com",
      updated_at: '11/11/2018',
      image_url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg"
    },
    {
      title: "My Third Doc",
      description: "Dadadaddaudududu",
      file_url: "http://google.com",
      updated_at: '11/11/2018',
      image_url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg"
    }

  ]


 }


// decorator give the ability to add metadata without defining them in the class itself