import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

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

GetBooks(){
return this.http.get<IBoek[]>("https://localhost:44354/api/v1/books?pages=0&length=100")
}

GetById (id: number): Observable<IBoek> {
  const url = `${this.apiurl}/${id}`;
  return this.http.get<IBoek>(url);
  }


  DeleteBooks(id: number): Observable<IBoek> {
    const url = `${this.apiurl}/${id}`;
    return this.http.delete<IBoek>(url, this.httpOptions);
  }




  UpdateBooks(user: IBoek): Observable<IBoek>{
    const url = `${this.apiurl}/${user.id}`;
    return this.http.put<IBoek>(this.apiurl, user, this.httpOptions).pipe(
      map(() => user),);
  }


  AddBooks (user: IBoek): Observable<IBoek> {
   
    return this.http.post<IBoek>(this.apiurl, user, this.httpOptions).pipe(
      tap(data => console.log(data)),

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
