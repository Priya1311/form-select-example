import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

import { IAppState } from './store';
import { Address } from './address.types';

@Injectable()
export class NewDeliveryActions {
  constructor(private ngRedux: NgRedux<IAppState>) {}

  setPickUpAddress(address: Address): void {
    this.ngRedux.dispatch({ type: 'SET_PICK_UP_ADDRESS', address });
  }
}
