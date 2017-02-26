import { Action, combineReducers } from 'redux';

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

export interface IAddressAction extends Action {
  address: Address;
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

function newDeliveryReducer(state = {}, action: IAddressAction): INewDelivery {
  if (action.type === 'SET_PICK_UP_ADDRESS') {
    return { pickUpAddress: action.address };
  }
  return state;
}

function businessReducer(state = {}, action: Action) {
  return state;
}

export const rootReducer = combineReducers({
  newDelivery: newDeliveryReducer,
  business: businessReducer,
});
