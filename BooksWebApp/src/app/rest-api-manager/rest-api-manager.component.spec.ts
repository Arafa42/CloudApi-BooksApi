import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestApiManagerComponent } from './rest-api-manager.component';

describe('RestApiManagerComponent', () => {
  let component: RestApiManagerComponent;
  let fixture: ComponentFixture<RestApiManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestApiManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestApiManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
