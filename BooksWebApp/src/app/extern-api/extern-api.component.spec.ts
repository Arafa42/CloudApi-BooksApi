import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternApiComponent } from './extern-api.component';

describe('ExternApiComponent', () => {
  let component: ExternApiComponent;
  let fixture: ComponentFixture<ExternApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
