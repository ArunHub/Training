import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearIdComponent } from './year-id.component';

describe('YearIdComponent', () => {
  let component: YearIdComponent;
  let fixture: ComponentFixture<YearIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
