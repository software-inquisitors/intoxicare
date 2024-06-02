import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class HttpsServiceService {

  serverUrl = "http://localhost:8000/";

  constructor(
    public _http: HttpClient
  ) { }

  /**
   * function dynamic to post request
   * @param routeRequest {String} final route of the request   
   * @param paramBody {Json} Body petition
   * @returns Promise
   * @author AlejandroGonzalez0
   * @version 1.0 
   */
  requestPost(routeRequest: String, paramBody: Object): Observable<any> {
    return this._http.post(`${this.serverUrl}` + routeRequest, paramBody);
  }

  /**
   * function dynamic to get request
   * @param routeRequest 
   * @returns Promise
   * @author AlejandroGonzalez0
   * @version 1.0 
   */
  requestGet(routeRequest: String): Observable<any> {
    return this._http.get(`${this.serverUrl}` + routeRequest);
  }

  /**
   * function dynamic to delete request
   * @param routeRequest {String} final route of the request   
   * @param paramBody {Json} Body petition
   * @returns Promise
   * @author AlejandroGonzalez0
   * @version 1.0 
   */
  requestDelete(routeRequest: String): Observable<any> {
    return this._http.delete(`${this.serverUrl}` + routeRequest);
  }
}
