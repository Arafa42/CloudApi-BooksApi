import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternApiDetailsComponent } from './extern-api-details.component';

describe('ExternApiDetailsComponent', () => {
  let component: ExternApiDetailsComponent;
  let fixture: ComponentFixture<ExternApiDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternApiDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternApiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
