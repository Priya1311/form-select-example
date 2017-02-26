import { Action, combineReducers } from 'redux';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';

import { Address } from './address.types';

interface INewDelivery {
  pickUpAddress?: Address;
}

interface IBusiness {
  addresses: Address[];
}

export interface IAppState {
  business?: IBusiness;
  newDelivery?: INewDelivery;
}

export const initialState: IAppState = {
  business: {
    addresses: [
      { name: 'John Doe', address_line_1: '123 main st.' },
      { name: 'John Smith', address_line_1: '321 back st.' },
      { name: 'Fred Bloggs', address_line_1: '111 any ave.' },
    ],
  },
  newDelivery: {},
}

function businessReducer(state = {}, action: Action) {
  return state;
}

export const rootReducer = composeReducers(
  defaultFormReducer(),
  combineReducers({
    business: businessReducer,
  }));
