import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Payload } from './payload';
import { catchError } from 'rxjs/operators';

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
      catchError((errorResponse) => {
        console.error(errorResponse);
        return throwError(errorResponse.error.fields);
      })
    );
  }
}
