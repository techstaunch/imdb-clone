import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ListComponent } from './list.component';
import { RemoveMovie } from './../../core/actions/movie.actions';
import { Movie } from 'app/models/movie.model';
import { StoreModule } from '@ngrx/store';
import { movieReducer } from 'app/core/reducer/movie.reducer';
import { RouterTestingModule } from '@angular/router/testing';
describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let store: MockStore<Movie[]>;
  let mockMoviesSelector;

  beforeEach(() => {
    TestBed.configureTestingModule(
      {


        imports: [StoreModule.forRoot(
          { movies: movieReducer }
        ), RouterTestingModule],

        declarations: [ListComponent],
        providers: [provideMockStore()]
      }
    ).compileComponents()
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    mockMoviesSelector = store.setState([{
      title: 'Avengers: Infinity War1',
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
    },
    {
      title: 'Avengers: Infinity War2',
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
    },
    {
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
    }])

    fixture.detectChanges();
    spyOn(store, 'dispatch').and.callFake(() => { });
  });

  it('should create', () => {
    expect(component).toBeTruthy();

  });

  it('remove method should dispatch remove action', () => {
    component.fnDelete({
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
    });
    expect(store.dispatch).toHaveBeenCalledWith(
      RemoveMovie({
        Movie: {
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
      })
    );
  });
});
