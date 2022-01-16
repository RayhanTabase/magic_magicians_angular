import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Quote} from '../components/quote/Quote'


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private apiUrl = "https://random-math-quote-api.herokuapp.com"

  constructor(private http: HttpClient) { }

  getQuote(): Observable<Quote[]>  {
    return this.http.get<Quote[]>(this.apiUrl, httpOptions)
  }
}
