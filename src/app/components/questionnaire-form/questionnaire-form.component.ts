import { Component, OnInit } from '@angular/core';
import { QuestionnaireState } from 'src/app/store/state';
import { Store } from '@ngrx/store';
import { QuestionnaireFormData } from 'src/app/model/QuestionnaireFormData';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-questionnaire-form',
  templateUrl: './questionnaire-form.component.html',
  styleUrls: ['./questionnaire-form.component.scss']
})
export class QuestionnaireFormComponent implements OnInit {

  formData$: Observable<QuestionnaireFormData[]>;

  constructor(
    private store: Store<QuestionnaireState>) {}

    ngOnInit() {
      this.formData$ =  this.store.select((state) => state.questionnaireState.formData);
    }

}
