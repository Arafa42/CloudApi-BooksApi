import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternApiComponent } from './extern-api.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('ExternApiComponent', () => {
  let component: ExternApiComponent;
  let fixture: ComponentFixture<ExternApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternApiComponent ],
      imports: [FormsModule,BrowserModule,ReactiveFormsModule,RouterModule,RouterTestingModule,HttpClientModule]
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
