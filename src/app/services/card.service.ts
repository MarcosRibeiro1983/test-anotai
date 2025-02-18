import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  static URL = environment.apiUrl + 'cardlist.json';
  constructor(private httpClient: HttpClient) { }


  getAll(): Observable<Card[]> {
    return this.httpClient.get<Card[]>( CardService.URL );
  } 

  delete(id: string): Observable<void> {
    return this.httpClient.delete<void>( CardService.URL + '/' + id );
  }
}
