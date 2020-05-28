import { ShoppingState } from '../reducers/shopping.reducer';

/**
 * This will allow us to type the structure of our
 * Store and make it easier to select slices of state in the future.
 */
export interface AppState {

  readonly shoppingState: ShoppingState;
}
