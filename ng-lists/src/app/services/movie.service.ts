import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Movie } from '../interfaces/movie';


@Injectable()
export class MovieService {

  constructor(private http: Http) { }
  getMovieData(): Observable<Movie> {
    return this.http.get('../../assets/data.json')
      .map((res: any) => {console.log(res); return res.json(); })
      .catch((err: any) => {console.log(err); return Observable.throw(err); });
  }

}
