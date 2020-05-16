import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternApiDetailsComponent } from './extern-api-details.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('ExternApiDetailsComponent', () => {
  let component: ExternApiDetailsComponent;
  let fixture: ComponentFixture<ExternApiDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternApiDetailsComponent ],
      imports: [FormsModule,BrowserModule,ReactiveFormsModule,HttpClientModule,RouterModule,RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternApiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 // it('should create', () => {
 //   expect(component).toBeTruthy();
 // });
});
