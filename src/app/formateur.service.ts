import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  constructor(private http: HttpClient) { }

  public getFormateurs(){

    return this.http.get('http://localhost:8089/api/formateurs');
  }
}
