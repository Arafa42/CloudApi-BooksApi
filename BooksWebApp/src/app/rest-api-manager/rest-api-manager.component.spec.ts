import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestApiManagerComponent } from './rest-api-manager.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Router } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('RestApiManagerComponent', () => {
  let component: RestApiManagerComponent;
  let fixture: ComponentFixture<RestApiManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [FormsModule,BrowserModule,ReactiveFormsModule,RouterModule,HttpClientModule,RouterTestingModule],
      declarations: [ RestApiManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestApiManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

//  it('should create', () => {
//    expect(component).toBeTruthy();
//  });
});
