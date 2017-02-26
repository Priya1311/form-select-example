import { Injectable, Component } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { NewDeliveryActions } from './new-delivery.actions';
import { IAppState } from './store';
import { Address } from './address.types';

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

  constructor(private newDeliveryActions: NewDeliveryActions) {}

  setPickUpAddress(address: Address): void {
    this.newDeliveryActions.setPickUpAddress(address);
  }
}
