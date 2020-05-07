import { Component, OnInit } from '@angular/core';
import { BoekenService, IBoek } from '../boeken.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {


boeks : IBoek[] = [];
boeks2 : IBoek;

boekUrl : string[] = [];
fetchId : number = 1;
page: number = 0;


  constructor(private boekSvc:BoekenService) {     
  }




  GetBooks(){this.boekSvc.GetBooks(this.page).subscribe(boeken => {

    this.boeks.length = boeken.length;
    this.boekUrl.length = boeken.length;
  for (let i = 0; i < boeken.length; i++) {
   
    this.boeks[i] = boeken[i];
    this.boekUrl[i] = boeken[i].thumbnailURL;
  }
  
  });}



  ngOnInit() {



this.GetBooks();





  }

}
