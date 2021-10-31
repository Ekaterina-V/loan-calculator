import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  private url = 'https://homework.fdp.workers.dev/';

  httpOptions = {
    headers: new HttpHeaders({
      'X-API-KEY': 'swb-222222',
    }),
  };

  constructor(private http: HttpClient) {}
}
