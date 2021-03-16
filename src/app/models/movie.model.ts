import { Time } from '@angular/common';

export interface Movie {
  title: string,
  type: string,
  genres: string[],
  screenTime: String,
  description: string,
  image: string,
  trailer: string,
  releaseDate: Date,
  plot: string,
  keyword: string[],
  tagline: string,
  releaseStatus: string,
  cast: [{ name: string, charectorName: string }],
  creator: [{ name: string, role: string }],
  rating: number
}

export const movieInitialState: Movie = {
  title: 'Avengers: Infinity War',
  type: 'PG-13',
  genres: ['Action', 'Adventure', 'Sci-Fi'],
  screenTime: '2 Hours 29 minutes',
  description: 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.',
  image: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg',
  trailer: 'https://www.youtube.com/watch?v=6ZfuNTqbHE8',
  releaseDate: new Date(1524787200000),
  plot: 'As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment, the fate of Earth and existence has never been more uncertain.',
  keyword: ['superhero', 'superVillain'],
  tagline: 'Destiny arrives',
  cast: [{ name: 'Robert Downey Jr.', charectorName: 'Tony Stark / Iron Man' }],
  creator: [{ name: 'Joe Russo', role: 'Director' }],
  releaseStatus: 'Released',
  rating: 9.2
}



export interface MovieState {
  movies: Movie[];
}

