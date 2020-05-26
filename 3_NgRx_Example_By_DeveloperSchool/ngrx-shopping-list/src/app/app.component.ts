import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingItem } from './store/models/shopping-item.model';
import { Store } from '@ngrx/store';
import { AppState } from './store/models/app-state.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-shopping-list';

  /**
   * Our shoppingItems observable matches the shopping reducer
   * that we defined in our StoreModule.forRoot() earlier. We also created
   * the AppState interface to match this and give us strong typing.
   */
  shoppingItems: Observable<Array<ShoppingItem>>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {



    this.shoppingItems = this.store.select(store => store.shopping); // Srong typing
    // or
    // this.shoppingItems = this.store.select('shopping'); // weak typing

  }

}
