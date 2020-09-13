import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApocalyseComponent } from './apocalyse.component';

describe('ApocalyseComponent', () => {
  let component: ApocalyseComponent;
  let fixture: ComponentFixture<ApocalyseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApocalyseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApocalyseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
