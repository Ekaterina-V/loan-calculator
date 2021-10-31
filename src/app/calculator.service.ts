import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Payload } from './payload';
import { catchError, tap } from 'rxjs/operators';

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

  submitForm(payload: Payload): Observable<any> {
    return this.http.post<Payload>(this.url, payload, this.httpOptions).pipe(
      tap((_) => console.log('submited payload')),
      catchError(this.handleError())
    );
  }

  private handleError() {
    return (error: any) => {
      console.error(error);
      return of(error);
    };
  }
}
