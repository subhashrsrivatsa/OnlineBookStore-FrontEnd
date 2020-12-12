import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseURL="http://localhost:8080/api/v1/books";

  constructor(private httpClient: HttpClient) { }


  // getBooks() method which returns Observable(it is a design pattern) of Array Books[]
  // Observable returns the data and the Observer consumes the data, and observer needs to subscribe the Observable
  getBooks(): Observable<Book[]>{
    return this.httpClient.get<GetResponseBooks>(this.baseURL).pipe(  // using httpClient to issue a get request from an interface GetResponseBooks
      map(response => response._embedded.books)                       // use map() operator to wrap inside embedded
    );
  }
}

interface GetResponseBooks{
  _embedded: {
    books: Book[];
  }
}
