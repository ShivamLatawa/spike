import { Action } from '@ngrx/store';
import { QuestionnaireFormData } from '../model/QuestionnaireFormData';

export class SaveData implements Action {
  readonly type = 'SaveData';
  constructor(public payload: QuestionnaireFormData) {}
}

export class ValidateQuestionCode implements Action {
  readonly type = 'ValidateQuestionCode';
  constructor(public payload: string) {}
}

export class SaveQuestionnaire implements Action {
  readonly type = 'SaveQuestionnaire';
}

export class QuestionnaireSavedSuccess implements Action {
  readonly type = 'QuestionnaireSavedSuccess';
}

export class QuestionnaireSavedFailure implements Action {
  readonly type = 'QuestionnaireSavedFailure';
}

export class DeleteQuestion implements Action {
  readonly type = 'DeleteQuestion';
  constructor(public payload: string) {}
}
