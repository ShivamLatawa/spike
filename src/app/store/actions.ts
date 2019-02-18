import { Action } from '@ngrx/store';
import { QuestionnaireFormData } from '../model/QuestionnaireFormData';

export class SaveData implements Action {
  readonly type = 'SaveData';
  constructor(public payload: QuestionnaireFormData) {}
}
