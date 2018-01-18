import { Component, OnInit } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { MovieService } from '../services/movie.service';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  providers: [MovieService]
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = new Array<Movie>();
  constructor( private movieService: MovieService) {
    this.movies = this.getMovies();
  }

  ngOnInit() {
    console.log(this.movies);
  }
  getMovies():Movie[] {
    const arr: Movie[] = [];
    this.movieService.getMovieData()
    .subscribe(function(rdata) {
      const data: any = rdata;
      data.forEach(movie => {
        console.log(movie);
        const newMovie: Movie = {};
        newMovie.name = movie.name;
        newMovie.description = movie.description;
        newMovie.image = movie.image;
        arr.push(newMovie);
      });
      }, (err) => {
        console.log(err);
    });
    return arr;
  }

}
