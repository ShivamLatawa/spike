import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireSelectorDialogComponent } from './questionnaire-selector-dialog.component';

describe('QuestionnaireSelectorDialogComponent', () => {
  let component: QuestionnaireSelectorDialogComponent;
  let fixture: ComponentFixture<QuestionnaireSelectorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireSelectorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireSelectorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
