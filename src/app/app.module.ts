import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';

import { rootReducer, initialState, IAppState } from './store';
import { AppComponent } from './app.component';
import { NewDeliveryActions } from './new-delivery.actions';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
  ],
  providers: [NewDeliveryActions],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>,
              devTools: DevToolsExtension) {
    ngRedux.configureStore(
      rootReducer,
      initialState,
      null,
      devTools.isEnabled() ? [ devTools.enhancer() ] : []);
  }
}
