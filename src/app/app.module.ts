import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionSelectorModalComponent } from './components/question-selector-modal/question-selector-modal.component';
import { YesNoComponent } from './components/yes-no/yes-no.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AddressInfoComponent } from './components/address-info/address-info.component';

import { QuestionnaireActionBarComponent } from './components/questionnaire-action-bar/questionnaire-action-bar.component';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { HttpClientModule } from '@angular/common/http';
import { ComponentWrapperComponent } from './components/component-wrapper/component-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionSelectorModalComponent,
    YesNoComponent,
    AddressInfoComponent,
    QuestionnaireActionBarComponent,
    ComponentWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
