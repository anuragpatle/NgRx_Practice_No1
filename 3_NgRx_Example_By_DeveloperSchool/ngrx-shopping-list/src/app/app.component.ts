import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingItem } from './store/models/shopping-item.model';
import { Store } from '@ngrx/store';
import { AppState } from './store/models/app-state.model';
import { AddItemAction, DeleteItemAction } from './store/actions/shopping.actions';
import { v4 as uuid } from 'uuid';

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

  newShoppingItem: ShoppingItem = { id: '', name: '' };

  constructor(private store: Store<AppState>) { }

  ngOnInit() {

    this.shoppingItems = this.store.select(store => store.shopping); // Srong typing
    // or
    // this.shoppingItems = this.store.select('shopping'); // weak typing
  }

  addItem() {
    this.newShoppingItem.id = uuid();

    this.store.dispatch(new AddItemAction(this.newShoppingItem));

    this.newShoppingItem = { id: '', name: '' };
  }

  deleteAnItem(id: string) {
    this.store.dispatch(new DeleteItemAction(id));
  }

}
