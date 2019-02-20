import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, EMPTY } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { QuestionnaireSavedSuccess, QuestionnaireSavedFailure } from './store/actions';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  @Effect()
  saveQuestionnaire$: Observable<Action> = this.actions$.pipe(
    ofType('SaveQuestionnaire'),
    mergeMap(() => {
      return this.http.post('some post call to OMC to save questionnaire', {})
      .pipe(map(() => new QuestionnaireSavedSuccess()),
        catchError(() => EMPTY));
    })
  );
}
