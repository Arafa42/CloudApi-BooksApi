import { Component, OnInit } from '@angular/core';
import { BoekenService, IBoek } from '../boeken.service';

@Component({
  selector: 'app-rest-api-manager',
  templateUrl: './rest-api-manager.component.html',
  styleUrls: ['./rest-api-manager.component.css']
})
export class RestApiManagerComponent implements OnInit {

boeks:IBoek;
boeks2:IBoek[];

  fetchId : number = 1;
  idtodelete: number = 0;
  
  constructor(private boekSvc:BoekenService) { }


  GetById(){this.boekSvc.GetById(this.fetchId).subscribe(data => {
    this.boeks = data;
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


  ngOnInit() {

    this.GetById();
    this.GetBooks();
    this.DeleteBooks();

  }

}
