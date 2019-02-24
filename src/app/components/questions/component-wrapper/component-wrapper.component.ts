import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { DeleteQuestion } from 'src/app/store/actions';

@Component({
  selector: 'app-component-wrapper',
  templateUrl: './component-wrapper.component.html',
  styleUrls: ['./component-wrapper.component.scss']
})
export class ComponentWrapperComponent {

  @Input() form: Object;

  constructor(private store: Store<any>) { }

  deleteQuestion(questionCode: string) {
    this.store.dispatch(new DeleteQuestion(questionCode));
  }

}
