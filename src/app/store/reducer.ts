import { QuestionnaireFormData } from '../model/QuestionnaireFormData';

export function QuestionnaireFormReducer(state: QuestionnaireFormData[] = [], action) {
  switch (action.type) {
      case 'SaveData': {
          const data = action.payload;
          return state.concat(data);
      }

      default: {
          return state;
      }
  }
}
