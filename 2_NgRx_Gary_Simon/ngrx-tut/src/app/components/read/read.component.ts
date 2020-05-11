import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Tutorial } from 'src/app/models/tutorial.model';
import { AppState } from 'src/app/app.state';
import * as TutorialActions from 'src/app/actions/tutorial.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  // Section 1
  tutorials$: Observable<Tutorial[]>;

  // Section 2
  constructor(private store: Store<AppState>) {
    this.tutorials$ = store.select('tutorial');
  }


  ngOnInit(): void {

  }

  delTutorial(index: number) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index));
  }

}
