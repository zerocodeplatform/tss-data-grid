import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TssGridComponent } from './tss-grid.component';

describe('TssGridComponent', () => {
  let component: TssGridComponent;
  let fixture: ComponentFixture<TssGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TssGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TssGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
