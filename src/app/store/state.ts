import { QuestionnaireFormData } from '../model/QuestionnaireFormData';

export interface FormDataState {
    formData: QuestionnaireFormData[];
    validQuestionCode: boolean;
}

export interface QuestionnaireState {
    questionnaireState: FormDataState;
}
