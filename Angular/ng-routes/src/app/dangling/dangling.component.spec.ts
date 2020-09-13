import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanglingComponent } from './dangling.component';

describe('DanglingComponent', () => {
  let component: DanglingComponent;
  let fixture: ComponentFixture<DanglingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanglingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanglingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
