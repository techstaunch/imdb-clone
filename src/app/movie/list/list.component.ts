import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RemoveMovie } from 'app/core/actions/movie.actions';
import { Movie } from 'app/models/movie.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
/**
 * Listing of movies
 * created: 15/3/2021
 * last modified: 16/3/2021
 */

export class ListComponent {

  movies: Observable<Movie[]>;

  constructor(private store: Store<any>, public route: Router, ) {
    this.movies = store.select('movies')

  }

  /**
   * Dispatch Remove for Movies State
   * @param movie: Movie
   * @returns undefined
   */
  fnDelete(movie: Movie) {
    this.store.dispatch(RemoveMovie({ Movie: movie }));

  }

  /**
   * Redirect to Edit Route of given Index
   * @param index: number
   * @returns undefined
   */
  fnEdit(index) {
    this.route.navigateByUrl(`edit/${index}`);
  }
}
