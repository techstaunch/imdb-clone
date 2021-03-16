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

export interface MovieState {
  movies: Movie[];
}

