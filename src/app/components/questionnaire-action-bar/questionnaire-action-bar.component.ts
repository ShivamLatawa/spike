import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SaveQuestionnaire } from 'src/app/store/actions';
import { MatDialog } from '@angular/material';
import {
  QuestionnaireSelectorDialogComponent
} from '../questionnaireEditor/questionnaire-selector-dialog/questionnaire-selector-dialog.component';

@Component({
  selector: 'app-questionnaire-action-bar',
  templateUrl: './questionnaire-action-bar.component.html',
  styleUrls: ['./questionnaire-action-bar.component.scss']
})
export class QuestionnaireActionBarComponent implements OnInit {

  constructor(private store: Store<any>, public dialog: MatDialog) { }

  ngOnInit() {
  }

  saveQuestionnaire() {
    this.store.dispatch(new SaveQuestionnaire());
  }

  openQuestionnaireSelectorDialog(): void {
    this.dialog.open(QuestionnaireSelectorDialogComponent, {
      width: '500px',
    });
  }

}
