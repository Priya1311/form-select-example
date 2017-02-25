import { Injectable, Component } from '@angular/core';
import { NgRedux, select, DevToolsExtension } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { Action, combineReducers } from 'redux';

interface Address {
  name: string;
  address_line_1: string;
}

export interface INewDelivery {
  pickUpAddress?: Address;
}

export interface IBusiness {
  addresses: Address[];
}

interface IAppState {
  business?: IBusiness;
  newDelivery?: INewDelivery;
}

interface IAddressAction extends Action {
  address: Address;
}

@Injectable()
export class NewDeliveryActions {
  constructor(private ngRedux: NgRedux<IAppState>) {}

  setPickUpAddress(address: Address): void {
    this.ngRedux.dispatch({ type: 'SET_PICK_UP_ADDRESS', address });
  }
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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  @select(['business', 'addresses'])
  public addresses$: Observable<Array<Address>>;

  @select(['newDelivery', 'pickUpAddress'])
  public pickUpAddress$: Observable<Address>;

  constructor(private ngRedux: NgRedux<IAppState>,
              private newDeliveryActions: NewDeliveryActions,
              devTools: DevToolsExtension) {
    ngRedux.configureStore(
      combineReducers({
        newDelivery: newDeliveryReducer,
        business: businessReducer,
      }),
      initialState,
      null,
      devTools.isEnabled() ? [ devTools.enhancer() ] : []);
  }

  setPickUpAddress(address: Address): void {
    this.newDeliveryActions.setPickUpAddress(address);
  }
}
