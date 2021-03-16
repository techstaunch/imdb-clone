
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AddMovie, UpdateMovie } from 'app/core/actions/movie.actions';
import { Movie, MovieState } from 'app/models/movie.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
/**
 * Add and Update Movie
 * created: 15/3/2021
 * last modified:16/3/2021
 */
export class AddComponent implements OnInit {
  movies: Observable<Movie[]>;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  isForEdit = false;
  index;
  constructor(private _formBuilder: FormBuilder,
    private store: Store<MovieState>,
    public route: Router,
    public activatedRoute: ActivatedRoute) {
    this.movies = store.select('movies')
  }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      TitleCtrl: ['', Validators.required],
      TypeCtrl: ['', Validators.required],
      GenersCtrl: ['']
    });
    this.secondFormGroup = this._formBuilder.group({
      screenTimeCtrl: [''],
      descriptionCtrl: [''],
      imageCtrl: [''],
      trailerCtrl: [''],
      releaseDateCtrl: [''],
      plotCtrl: [''],
      keywordCtrl: [''],
    });
    this.thirdFormGroup = this._formBuilder.group({
      taglineCtrl: [''],
      releaseStatusCtrl: [''],
      castCtrl: [''],
      creatorCtrl: [''],
      ratingCtrl: [''],
    })

    this.activatedRoute.params.subscribe(data => {
      if (data && data.index !== undefined) {
        this.isForEdit = true;
        this.index = data.index;
        this.fnMapData()
      }
    });

  }

  /**
   * Map data into from if used for edit
   */
  async fnMapData() {
    this.movies.subscribe((movies) => {
      const movie = movies[this.index];
      this.firstFormGroup.setValue({
        TitleCtrl: movie.title,
        TypeCtrl: movie.type,
        GenersCtrl: movie.genres.join(','),
      })
    });
  }

  /**
   * submit form
   * Dispatch Add and Edit for Movies State
   * and route to list page
   */
  fnSubmit(): void {

    if (this.firstFormGroup.valid) {
      let data: Movie
      data = {
        title: this.firstFormGroup.get('TitleCtrl').value,
        type: this.firstFormGroup.get('TypeCtrl').value,
        genres: this.firstFormGroup.get('GenersCtrl').value.split(','),
        screenTime: this.secondFormGroup.get('screenTimeCtrl').value,
        description: this.secondFormGroup.get('descriptionCtrl').value,
        image: this.secondFormGroup.get('imageCtrl').value,
        trailer: this.secondFormGroup.get('trailerCtrl').value,
        releaseDate: this.secondFormGroup.get('releaseDateCtrl').value,
        plot: this.secondFormGroup.get('plotCtrl').value,
        keyword: this.secondFormGroup.get('keywordCtrl').value.split(','),
        tagline: this.thirdFormGroup.get('taglineCtrl').value,
        releaseStatus: this.thirdFormGroup.get('releaseStatusCtrl').value,
        cast: [{ name: '', charectorName: '' }],
        creator: [{ name: '', role: '' }],
        rating: 9.3,

      }
      if (this.isForEdit) {
        this.store.dispatch(UpdateMovie({ Movie: data, index: this.index }));
      } else {
        this.store.dispatch(AddMovie({ Movie: data }));
      }
      this.route.navigateByUrl('list');
    }
  }

}
