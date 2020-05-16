import { Component, OnInit, ErrorHandler } from '@angular/core';
import { BoekenService, IBoek } from '../boeken.service';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-rest-api-manager',
  templateUrl: './rest-api-manager.component.html',
  styleUrls: ['./rest-api-manager.component.css']
})
export class RestApiManagerComponent implements OnInit {

boeks:IBoek = {  id: 0,title: "",isbn: "",pages: 0,categories: "",publishedDate: "",thumbnailURL: "",shortDescription: "",longDescription: "",status: ""};
boeksTest:IBoek;
boeks2:IBoek[]=[];
displayData: boolean;
userFormGroup: FormGroup;
public error: any; 

  fetchId : number = null;
  idtodelete: number;
  idtoUpdate: number;
  status: string = "";
  title: string = "";
  shortDes: string = "";
  longDes: string = "";
  isbn: string = "";
  categories: string = "";
  thumbURL: string = "";
  pubDate: string = "";
  pages: number = 0;
  
  constructor(private boekSvc:BoekenService) { }


  GetById(){this.boekSvc.GetById(this.fetchId).subscribe(data => {
    this.boeks = data;
    this.displayData=true; 
    }, error => { // second parameter is to listen for error
      if(this.fetchId != null){
      alert("ERROR FETCHING BOOK, STATUS CODE : " + error.status  +" "+ error.statusText +  "\n" + JSON.stringify(error.error));}
      this.error = error.status;});}



    DeleteBooks() {



      this.boekSvc.DeleteBooks(this.idtodelete).subscribe(data => {
        this.GetBooks();
      }, error => { // second parameter is to listen for error
        if(this.fetchId != null){
        alert("ERROR DELETING BOOK, STATUS CODE : " + error.status  +" "+ error.statusText + "\n" + JSON.stringify(error.error));}
        this.error = error.status;});
    }
  
    GetBooks(){
      this.boekSvc.GetBooks(0).subscribe(data => {
        this.boeks2 = data;
      }, error => { // second parameter is to listen for error
        alert("ERROR, STATUS CODE : "+error.status  +" "+ error.statusText +  "\n" + JSON.stringify(error.error));
        this.error = error.status;}
        );}


    UpdateBooks() {
      this.boekSvc.GetById(this.idtoUpdate).subscribe(data => {
        this.boeks = data;
        this.boeks.title = this.title;
        this.boeks.shortDescription = this.shortDes;
        this.boeks.longDescription = this.longDes;
        this.boeks.isbn = this.isbn;
        this.boeks.pages = this.pages;
        this.boeks.categories = this.categories;
        this.boeks.status = this.status;
        this.boeks.thumbnailURL = this.thumbURL;
        this.boeks.publishedDate = this.pubDate;



        this.boekSvc.UpdateBooks(this.boeks).subscribe(data1 => {
          this.GetBooks();
        });
      }, error => { // second parameter is to listen for error
        alert("ERROR UPDATING BOOK, STATUS CODE : " +error.status+ " "+ error.statusText +  "\n" + JSON.stringify(error.error));
        this.error = error.status;});
    }


    AddBooks() {
      this.boekSvc.AddBooks(this.userFormGroup.value).subscribe(data => {
        this.boeks = data;
        console.log(this.boeks);
      }, error => { // second parameter is to listen for error
        alert("ERROR CREATING BOOK, STATUS CODE : " +error.status+" "+ error.statusText +  "\n" + JSON.stringify(error.error));
        this.error = error.status;});
      this.GetAllBooks();
    }


    GetAllBooks(){

      this.boekSvc.GetBooks(0).subscribe(boeken => {

        this.boeks2.length = boeken.length;
      for (let i = 0; i < boeken.length; i++) {
        this.boeks2[i] = boeken[i];
      }
    
      }, error => { // second parameter is to listen for error
        alert("ERROR, STATUS CODE : " +error.status+" "+ error.statusText +  "\n" + JSON.stringify(error.error));
        this.error = error.status;});
      
    }


    

  ngOnInit() {
    this.userFormGroup = new FormGroup(
      {
        title : new FormControl(''),
        categories : new FormControl(''),
        pages:new FormControl(''),
        isbn:new FormControl(''),
        shortDes:new FormControl(''),
        longDes:new FormControl(''),
        status:new FormControl(''),
        thumbnailURL:new FormControl(''),
        publishedDate:new FormControl('')
      },
    );

    this.GetAllBooks();
    this.GetById();
    this.GetBooks();
    this.DeleteBooks();

  }

}
