import { Injectable } from '@angular/core';  // for connection to the api
import { Http, Response, Headers, RequestOptions } from '@angular/http';  // for connection to the api
import { Observable } from 'rxjs';  // for connection to the api
import { map } from 'rxjs/operators'; // for connection to the api
import { Document } from './document';






@Injectable()

// services are used to bring on the datas, these are not the components that consist of the frontend part

export class DocumentService{
  private documentsUrl = 'http://0.0.0.0:3001/view_boxes.json';

  constructor(
    private http: Http     // dependency injection, ie injecting the dependency http

  ){}

  getDocuments(): Observable<Document[]>{
    return this.http.get(this.documentsUrl).pipe(map((response: Response) => <Document[]>response.json()))

  }  }

   // private handleError (error: Response | any){
   //    //In real world app we might use a remote login infrastructure
   //    let errMsg : string;
   //    if (error instanceof Response){
   //      const body = error.json() || '';
   //      const err = body.error || JSON.stringify(body);
   //      errMsg = `$(error.status) - $(error.statusText || '') ${err}`;
   //      }else{
   //        errMsg = error.message ? error.message : error.toString();
   //      }
   //      console.error(errMsg);
   //      return Observable.throw(errMsg);
   //    }
   // }

// we need to call it as soon as the class is instantited
// getDocuments return Observable, while the observable requires type argument, here an array if Document
