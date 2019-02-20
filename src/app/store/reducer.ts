import { FormDataState } from './state';
import { QuestionnaireFormData } from '../model/QuestionnaireFormData';

const initialState: FormDataState = {formData: [], validQuestionCode: true};

export function QuestionnaireFormReducer(state = initialState, action) {
  switch (action.type) {
      case 'SaveData': {
          const data = action.payload;
          return Object.assign({}, state, {formData: state.formData.concat(data)});
      }

      case 'ValidateQuestionCode': {
          const code = action.payload;
          const isValid = validateQuestionCode(code, state.formData);
          return Object.assign({}, state, {validQuestionCode: isValid});
      }

      case 'DeleteQuestion': {
        const questionCode = action.payload;
        return Object.assign({}, state, {formData:  deleteQuestion(state.formData, questionCode)});
    }

      default: {
          return state;
      }
  }
}

const validateQuestionCode = (questionCode: string, formData: QuestionnaireFormData[]) => {
        const filteredForms = formData.filter((form) => {
            return form.questionCode === questionCode;
        });

        return filteredForms.length === 0;
};

const deleteQuestion = (formData: QuestionnaireFormData[], questionCode: string) => {
    return formData.filter((form) => {
        return form.questionCode !== questionCode;
    });
};
