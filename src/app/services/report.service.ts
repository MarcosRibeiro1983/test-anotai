import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  private jsonUrl = 'reports.json'; 
  
  getReport(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
}
