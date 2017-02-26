import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgReduxFormModule } from '@angular-redux/form';

import { AppComponent } from './app.component';
import { rootReducer, initialState, IAppState } from './store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    NgReduxFormModule,
  ],
  providers: [],
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
