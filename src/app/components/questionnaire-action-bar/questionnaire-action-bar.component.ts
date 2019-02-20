import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SaveQuestionnaire } from 'src/app/store/actions';

@Component({
  selector: 'app-questionnaire-action-bar',
  templateUrl: './questionnaire-action-bar.component.html',
  styleUrls: ['./questionnaire-action-bar.component.scss']
})
export class QuestionnaireActionBarComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  saveQuestionnaire() {
    this.store.dispatch(new SaveQuestionnaire());
  }

}
