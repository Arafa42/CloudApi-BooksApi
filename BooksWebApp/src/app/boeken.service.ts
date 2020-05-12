import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoekenService {

  constructor(private http: HttpClient) { }



  apiurl: string = "https://localhost:44354/api/v1/books";
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };


  private handleError(error: any) {
    console.error(error);                               
    return throwError(error);
  }


GetBooks(page:number=0){
return this.http.get<IBoek[]>(`https://localhost:44354/api/v1/books?page=${page}&length=10`)
}


GetById (id: number): Observable<IBoek> {
  const url = `${this.apiurl}/${id}`;
  return this.http.get<IBoek>(url).pipe(
    catchError(this.handleError)
    );
  }


  DeleteBooks(id: number): Observable<IBoek> {
    const url = `${this.apiurl}/${id}`;
    return this.http.delete<IBoek>(url, this.httpOptions).pipe(
      catchError(this.handleError));
 
  }




  UpdateBooks(b: IBoek): Observable<IBoek>{
    const url = `${this.apiurl}/${b.id}`;
    return this.http.put<IBoek>(this.apiurl, b, this.httpOptions).pipe(
      map(() => b), catchError(this.handleError));
  }


  AddBooks (user: IBoek): Observable<IBoek> {
   
    return this.http.post<IBoek>(this.apiurl, user, this.httpOptions).pipe(
      tap(data => console.log(data)),catchError(this.handleError)
      );

  
}



}

export interface IBoek {
  id: number;
  title: string;
  isbn: string;
  pages: number;
  categories: string;
  publishedDate: string;
  thumbnailURL: string;
  shortDescription: string;
  longDescription: string;
  status: string;
}
