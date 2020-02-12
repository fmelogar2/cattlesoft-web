import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';



@Injectable()
export class GenericClientService {

  //token: string = localStorage.getItem("_appToken");

  constructor (private http: Http) {}

  getGenericItems(uriService : string): Observable<any[]> {
    let headers = new Headers({ 'Authorization' : '*'});
    let options = new RequestOptions({ headers: headers });
    return this.http.get(uriService)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  
  get(uriService : string): Observable<any[]> {
    let headers = new Headers({ 'Authorization' : '*'});
    let options = new RequestOptions({ headers: headers });
    console.log(JSON.stringify(uriService));
    return this.http.get(uriService)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  
  post(uriService : string, req : any):
                               Observable<any> {
    let body = req;
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this.http.post(uriService, body, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  
  put(uriService : string, req : any):
                               Observable<any> {
    let body = req;
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this.http.put(uriService, body, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  
  delete(uriService : string): Observable<any[]> {
    let headers = new Headers({ 'Authorization' : '*'});
    let options = new RequestOptions({ headers: headers });
    console.log(JSON.stringify(uriService));
    console.log(JSON.stringify(uriService));
    return this.http.delete(uriService)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(error.errMsg);
  }

}