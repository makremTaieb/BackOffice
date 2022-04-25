import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RelationService {

  baseUrl = environment.apiUrlGraph;
  baseUrlToken = environment.apiUrlToken;
  constructor(private http: HttpClient) { }


}
