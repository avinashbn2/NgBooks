import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Book } from '../interfaces/book';

@Injectable()
export class BookService {

  constructor(private http: Http) { }
  getBookData(): Observable<Book> {
    return this.http.get('../../assets/books.json')
      .map((res: any) => {console.log(res); return res.json(); })
      .catch((err: any) => {console.log(err); return Observable.throw(err); });
  }

}
