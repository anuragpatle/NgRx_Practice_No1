import { Customer } from './models/customer';
import { Action } from '@ngrx/store';

export enum CustomerActionTypes {
  Add = '[Customer Component] Add',
  Remove = '[Customer Component] Remove'
}

export class ActionEx implements Action {
  readonly type;
  payload: Customer;
}

export class CustomerAdd implements ActionEx {
  readonly type = CustomerActionTypes.Add;

  constructor(public payload: Customer) {

  }

}

export class CustomerRemove implements ActionEx {
  readonly type = CustomerActionTypes.Remove;

  constructor(public payload: Customer) {

  }

}
