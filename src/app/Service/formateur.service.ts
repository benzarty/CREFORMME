import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Formateur} from '../Model/Formateur';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  constructor(private http: HttpClient) { }

  public getFormateurs() {

    return this.http.get('http://localhost:8089/api/formateurs');
  }
  public getFormateur(id) {

    return this.http.get('http://localhost:8089/api/formateur/' + id);
  }
  public postFormateur(body) {
    return this.http.post('http://localhost:8089/api/formateur', body);
  }
  public putFormateur(id, body) {
    return this.http.put('http://localhost:8089/api/formateur/' + id , body);
  }
  public delete(x) {
    return this.http.delete('http://localhost:8089/api/formateur/' + x);
  }


}
