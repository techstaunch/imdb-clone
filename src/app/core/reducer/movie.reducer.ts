import { createReducer, on } from '@ngrx/store';;
import { AddMovie, RemoveMovie, UpdateMovie } from '../actions/movie.actions';

export const movieReducer = createReducer(
  [],
  on(AddMovie, (state, { Movie }) => [...state, Movie]),
  on(UpdateMovie, (state, { Movie, index }) => {
    const newState = [...state];
    newState.splice(index, 1, Movie);
    return newState;
  }),
  on(RemoveMovie, (state, { Movie }) => state.filter((movie) => movie !== Movie)),


)
