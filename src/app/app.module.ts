import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './reducers';
import { AppEffects } from './app.effects';


import { MaterialModule } from './material/material-module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionnaireActionBarComponent } from './components/questionnaire-action-bar/questionnaire-action-bar.component';
import { QuestionnaireFormComponent } from './components/questionnaire-form/questionnaire-form.component';
import { YesNoComponent } from './components/questions/yes-no/yes-no.component';
import { AddressInfoComponent } from './components/questions/address-info/address-info.component';
import { ComponentWrapperComponent } from './components/questions/component-wrapper/component-wrapper.component';
import {
  QuestionnaireSelectorDialogComponent
} from './components/questionnaireEditor/questionnaire-selector-dialog/questionnaire-selector-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    YesNoComponent,
    AddressInfoComponent,
    QuestionnaireActionBarComponent,
    ComponentWrapperComponent,
    QuestionnaireSelectorDialogComponent,
    QuestionnaireFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([AppEffects])
  ],
  entryComponents: [QuestionnaireSelectorDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
