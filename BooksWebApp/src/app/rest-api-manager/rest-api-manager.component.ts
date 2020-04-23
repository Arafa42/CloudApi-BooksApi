import { Component, OnInit } from '@angular/core';
import { BoekenService, IBoek } from '../boeken.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-rest-api-manager',
  templateUrl: './rest-api-manager.component.html',
  styleUrls: ['./rest-api-manager.component.css']
})
export class RestApiManagerComponent implements OnInit {

boeks:IBoek;
boeks2:IBoek[]=[];
displayData: boolean;
userFormGroup: FormGroup;

  fetchId : number = 1;
  idtodelete: number = 0;
  idtoUpdate: number = 0;
  
  constructor(private boekSvc:BoekenService) { }


  GetById(){this.boekSvc.GetById(this.fetchId).subscribe(data => {
    this.boeks = data;
    this.displayData=true;
    });}



    DeleteBooks() {

      this.boekSvc.DeleteBooks(this.idtodelete).subscribe(data => {
        this.GetBooks();
      });
    }
  
    GetBooks(){
      this.boekSvc.GetBooks().subscribe(data => {
        this.boeks2 = data;
      });
    }


    UpdateBooks() {
      this.boekSvc.GetById(this.idtoUpdate).subscribe(data => {
        this.boeks = data;
        this.boekSvc.UpdateBooks(this.boeks).subscribe(data1 => {
          this.GetBooks();
        });
      });
    }


    AddBooks() {
      this.boekSvc.AddBooks(this.userFormGroup.value).subscribe(data => {
        this.boeks = data;
        console.log(this.boeks);
      });
      this.GetAllBooks();
    }


    GetAllBooks(){

      this.boekSvc.GetBooks().subscribe(boeken => {

        this.boeks2.length = boeken.length;
      for (let i = 0; i < boeken.length; i++) {
        this.boeks2[i] = boeken[i];
      }
    
      });
      
    }


    

  ngOnInit() {
    this.userFormGroup = new FormGroup(
      {
        title : new FormControl(''),
        categories : new FormControl(''),
        pages:new FormControl('')
      },
    );

    this.GetAllBooks();
    this.GetById();
    this.GetBooks();
    this.DeleteBooks();

  }

}