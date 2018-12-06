import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GametilesComponent } from './gametiles.component';

describe('GametilesComponent', () => {
  let component: GametilesComponent;
  let fixture: ComponentFixture<GametilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GametilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GametilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
