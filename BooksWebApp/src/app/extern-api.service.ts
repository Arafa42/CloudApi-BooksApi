import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ExternApiService {
  key = "AIzaSyDci292F2LANPLWIoUo_xepWTD-DoF_7Bk";
  constructor(private httpClient: HttpClient) {}
  get(queryField: string) {
    return this.httpClient.get(
      `https://www.googleapis.com/books/v1/volumes?q=${queryField}&maxResults=39&keyes&key=${this.key}`
    );
  }
  getBookData(blogID) {
    return this.httpClient.get(
      `https://www.googleapis.com/books/v1/volumes/${blogID}`
    );
  }
}
