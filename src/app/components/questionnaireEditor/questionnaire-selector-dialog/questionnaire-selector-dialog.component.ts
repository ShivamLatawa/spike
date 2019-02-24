import {
  Component, OnInit
} from '@angular/core';
import {
  MatDialogRef
} from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { QuestionnaireFormData } from 'src/app/model/QuestionnaireFormData';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionnaireState } from 'src/app/store/state';
import { ValidateQuestionCode, SaveData } from 'src/app/store/actions';


@Component({
  selector: 'app-questionnaire-selector-dialog',
  templateUrl: './questionnaire-selector-dialog.component.html',
  styleUrls: ['./questionnaire-selector-dialog.component.scss']
})
export class QuestionnaireSelectorDialogComponent implements OnInit {

  formData$: Observable<QuestionnaireFormData[]>;
  validQuestionCode$: Observable<boolean>;
  questionnaireForm: FormGroup;
  formSubmitted: Boolean = false;

  constructor(
    public dialogRef: MatDialogRef < QuestionnaireSelectorDialogComponent >,
    private store: Store<QuestionnaireState>,
    private formBuilder: FormBuilder ) {}

    ngOnInit() {
      this.formData$ =  this.store.select((state) => state.questionnaireState.formData);
      this.validQuestionCode$ =  this.store.select((state) => state.questionnaireState.validQuestionCode);

      this.questionnaireForm = this.formBuilder.group({
        masterQuestion: ['', Validators.required],
        questionCode: ['', Validators.required],
        questionDescription: ['', [Validators.required]],
        visibilityRule: ['', []],
    });
    }
    get f() { return this.questionnaireForm.controls; }

  onSubmit() {
    const form = this.questionnaireForm;
    this.formSubmitted = true;

    this.store.dispatch(new ValidateQuestionCode(form.value.questionCode));

    let isInvalid;
    this.validQuestionCode$.subscribe(isValid => {
      isInvalid = !isValid;
    });

    if (form.invalid || isInvalid) {
      return;
    }

    this.store.dispatch(new SaveData(form.value));

    this.resetForm();
    this.dialogRef.close();
  }

  resetForm() {
    this.questionnaireForm.reset();
    this.formSubmitted = false;
  }
}
