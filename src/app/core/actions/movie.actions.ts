import { createAction, props } from '@ngrx/store';
import { Movie } from 'app/models/movie.model';

/**
 * Add movie action
 */
export const AddMovie = createAction(
  '[MOVIE] Add',
  props<{ Movie: Movie }>()
);

/**
 * Update movie action
 */
export const UpdateMovie = createAction(
  '[MOVIE] update',
  props<{ Movie: Movie, index: number }>()
)

/**
 * Remove movie action
 */
export const RemoveMovie = createAction(
  '[MOVIE] Remove',
  props<{ Movie: Movie }>()
)
