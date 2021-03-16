import { createReducer, on } from '@ngrx/store';
import { movieInitialState } from 'app/models/movie.model';
import { AddMovie, RemoveMovie, UpdateMovie } from '../actions/movie.actions';

export const movieReducer = createReducer(
  [movieInitialState],
  on(AddMovie, (state, { Movie }) => [...state, Movie]),
  on(UpdateMovie, (state, { Movie, index }) => {
    const newState = [...state];
    newState.splice(index, 1, Movie);
    return newState;
  }),
  on(RemoveMovie, (state, { Movie }) => state.filter((movie) => movie !== Movie)),


)
