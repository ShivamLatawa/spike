import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SaveData, ValidateQuestionCode } from 'src/app/store/actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { QuestionnaireState } from 'src/app/store/state';
import { QuestionnaireFormData } from 'src/app/model/QuestionnaireFormData';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-question-selector-modal',
  templateUrl: './question-selector-modal.component.html',
  styleUrls: ['./question-selector-modal.component.scss']
})
export class QuestionSelectorModalComponent implements OnInit {

  formData$: Observable<QuestionnaireFormData[]>;
  validQuestionCode$: Observable<boolean>;
  questionnaireForm: FormGroup;
  formSubmitted: Boolean = false;

  constructor(private modalService: NgbModal,
    private store: Store<QuestionnaireState>, private formBuilder: FormBuilder) {}

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

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

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
    this.modalService.dismissAll();
  }

  resetForm() {
    this.questionnaireForm.reset();
    this.formSubmitted = false;
  }
}
