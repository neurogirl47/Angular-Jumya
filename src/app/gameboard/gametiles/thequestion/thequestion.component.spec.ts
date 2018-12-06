import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThequestionComponent } from './thequestion.component';

describe('ThequestionComponent', () => {
  let component: ThequestionComponent;
  let fixture: ComponentFixture<ThequestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThequestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThequestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
