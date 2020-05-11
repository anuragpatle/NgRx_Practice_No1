import { Action } from '@ngrx/store';
import { Tutorial } from './../models/tutorial.model';
import * as TutorialActions from './../actions/tutorial.actions';

// Section 1
const initialState: Tutorial = {
  name: 'Initial Tutorial',
  url: 'http://google.com'
};

// Section 2
export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions): Tutorial[] {

  // Section 3
  switch (action.type) {

    case TutorialActions.ADD_TUTORIAL:
      return [...state, action.payload]; // returning an array containing old as well as new value.

    case TutorialActions.REMOVE_TUTORIAL:

      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];

    default:
      return state;
  }
}
