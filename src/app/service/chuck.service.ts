import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChuckService {
   
  apiUrl = environment.API;
  constructor(private http: HttpClient) { }

  getCat(){
    return this.http.get<any>(`${this.apiUrl}/categories`);
  }

  getJoke(cat: string){
    return this.http.get<any>(`${this.apiUrl}/random?category=${cat}`);
  }
}
