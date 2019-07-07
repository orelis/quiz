import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuisDataService {

  constructor(private http: HttpClient) {}

  getQuizData(){
    return this.http.get('./assets/data.json')
  }
}
