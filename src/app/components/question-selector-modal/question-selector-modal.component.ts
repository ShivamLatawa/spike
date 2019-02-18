import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SaveData } from 'src/app/store/actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormDataState } from 'src/app/store/state';
import { QuestionnaireFormData } from 'src/app/model/QuestionnaireFormData';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-question-selector-modal',
  templateUrl: './question-selector-modal.component.html',
  styleUrls: ['./question-selector-modal.component.scss']
})
export class QuestionSelectorModalComponent implements OnInit {

  formData$: Observable<QuestionnaireFormData[]>;
  questionnaireForm: FormGroup;
  formSubmitted: Boolean = false;

  constructor(private modalService: NgbModal,
    private store: Store<FormDataState>, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formData$ =  this.store.select((state) => state.formData);

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

    if (form.invalid) {
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
