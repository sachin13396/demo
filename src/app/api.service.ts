import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Item } from './header/item.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url='https://www.mocky.io/v2/5eda4003330000740079ea60';

  constructor(private http: HttpClient) { }
  
  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url)
      .pipe(
        tap(_ => this.log('fetched items')),
        catchError(this.handleError<Item[]>('getItems', []))
      );
  }



  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
  private log(message: string) {
    console.log(message);
    //this.messageService.add(`HeroService: ${message}`);
  }
}
