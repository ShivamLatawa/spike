import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireActionBarComponent } from './questionnaire-action-bar.component';

describe('QuestionnaireActionBarComponent', () => {
  let component: QuestionnaireActionBarComponent;
  let fixture: ComponentFixture<QuestionnaireActionBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireActionBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireActionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
