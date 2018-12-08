import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FormationService {
  constructor(private http: HttpClient) { }

  public getFormations() {

    return this.http.get('http://localhost:8089/api/formation/findAll');
  }
   postFormation(body) {
      return this.http.post('http://localhost:8089/api/formation', body);
      }
  public delete(x) {
    return this.http.delete('http://localhost:8089/api/formation/' + x);
  }

}
