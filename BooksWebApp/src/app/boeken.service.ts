import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import {throwError} from 'rxjs';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Injectable({
  providedIn: 'root'
})
export class BoekenService {

auths : boolean;
  
  constructor(private http: HttpClient,auth:AuthService) {

   this.auths = auth.loggedIn;

  }

//  if (auth.loggedIn) {
//    this.headers = new HttpHeaders().set('Authorization','Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjZQRlBoUmhxN2xaV1FzRDFCQjRWRyJ9.eyJpc3MiOiJodHRwczovL2Nsb3VkYXBpMjAyMC5ldS5hdXRoMC5jb20vIiwic3ViIjoiWmY1aGw2NmxnRzZUWDN1NEZoemxUdktkWFpZUDJMbEFAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzU0IiwiaWF0IjoxNTg5MzczMzU3LCJleHAiOjE1ODk0NTk3NTcsImF6cCI6IlpmNWhsNjZsZ0c2VFgzdTRGaHpsVHZLZFhaWVAyTGxBIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.kPSBkyEBmVsYY-T94JBDTkYgzf6Hdr0w8DGh3RChz8yMCASUkNGLXrxSocfsuLEWXk2Ghwo-khx4Ap1w10-BkyhagTYiawylSXrJgBo4tqmNr130QktBv-eZGoi04oYqRzE6qxOlj1aZ2_6_Iv-BISBD8RDdZEkTo4v_c-9a_2DDYjbPAkO4aT6xMY_STmO5omdqdUweRt-6SFDs6zo90E6xA6FmV20Q-wQWtleA2KY8akY8g4UsdfMoaHcDC5lfoxBMd3ppJffosxmA9wCojDxoUGjara9p48ApolzHw1FJH_xAzmUZFfuC_k7esYerIIP4K4WsMJKaIAI4nmCQ0w').set('Content-Type', 'application/json').set('Accept', 'application/json');      
//  }    
//else{
//this.headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');    

//}

apiurl: string = "https://localhost:44354/api/v1/books";
headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');    
httpOptions = {
headers: this.headers
};





  private handleError(error: any) {
    console.error(error);                               
    return throwError(error);
  }


GetBooks(page:number=0,sort:string="",dir:string=""){
return this.http.get<IBoek[]>(`https://localhost:44354/api/v1/books?page=${page}&length=10&sort=${sort}&dir=${dir}`)
}



GetById (id: number=0): Observable<IBoek> {
  const url = `${this.apiurl}/${id}`;
  return this.http.get<IBoek>(url).pipe(
    catchError(this.handleError)
    );
  }


  DeleteBooks(id: number): Observable<IBoek> {

    if(this.auths){this.httpOptions.headers = new HttpHeaders().set('Authorization','Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjZQRlBoUmhxN2xaV1FzRDFCQjRWRyJ9.eyJpc3MiOiJodHRwczovL2Nsb3VkYXBpMjAyMC5ldS5hdXRoMC5jb20vIiwic3ViIjoiWmY1aGw2NmxnRzZUWDN1NEZoemxUdktkWFpZUDJMbEFAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzU0IiwiaWF0IjoxNTkwMDA3ODI4LCJleHAiOjE1OTAwOTQyMjgsImF6cCI6IlpmNWhsNjZsZ0c2VFgzdTRGaHpsVHZLZFhaWVAyTGxBIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.gPFjAGIRULuOQMEAIFxC66jXYhsvBNh9QDgX9I6X1YF1h-KNtnGvVsnT9G9KUf7DsDxw6aBnuqIbOrnPPLSXos-Spe0kyaki0S2yqTFGZ3RjlZKoAeTRPivcc_3144N5K2SLx9It7J2SwYZ9Gz470j0T6pIaMP2LabE11L9puGYUkPZ4prbeLCo6W3fBAXrJinK5FgfAgbHt4o8M5l-6rwWuJxTmiYN0J5jBsUTlOEiD5DwUyJpwxCuIePO4VpcAcLdXv7OJ8j2g6nLAWupI2hHhPQg2ia7yrl0TyB5633dGakb07l8rB9t4QXYrEz2npeoVY3AeBkZWoE_51weRhw').set('Content-Type', 'application/json').set('Accept', 'application/json');      }
    else{
      this.httpOptions.headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');    
    }

    const url = `${this.apiurl}/${id}`;
    return this.http.delete<IBoek>(url, this.httpOptions).pipe(
      catchError(this.handleError));
 
  }




  UpdateBooks(b: IBoek): Observable<IBoek>{
    
    if(this.auths){this.httpOptions.headers = new HttpHeaders().set('Authorization','Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjZQRlBoUmhxN2xaV1FzRDFCQjRWRyJ9.eyJpc3MiOiJodHRwczovL2Nsb3VkYXBpMjAyMC5ldS5hdXRoMC5jb20vIiwic3ViIjoiWmY1aGw2NmxnRzZUWDN1NEZoemxUdktkWFpZUDJMbEFAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzU0IiwiaWF0IjoxNTkwMDA3ODI4LCJleHAiOjE1OTAwOTQyMjgsImF6cCI6IlpmNWhsNjZsZ0c2VFgzdTRGaHpsVHZLZFhaWVAyTGxBIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.gPFjAGIRULuOQMEAIFxC66jXYhsvBNh9QDgX9I6X1YF1h-KNtnGvVsnT9G9KUf7DsDxw6aBnuqIbOrnPPLSXos-Spe0kyaki0S2yqTFGZ3RjlZKoAeTRPivcc_3144N5K2SLx9It7J2SwYZ9Gz470j0T6pIaMP2LabE11L9puGYUkPZ4prbeLCo6W3fBAXrJinK5FgfAgbHt4o8M5l-6rwWuJxTmiYN0J5jBsUTlOEiD5DwUyJpwxCuIePO4VpcAcLdXv7OJ8j2g6nLAWupI2hHhPQg2ia7yrl0TyB5633dGakb07l8rB9t4QXYrEz2npeoVY3AeBkZWoE_51weRhw').set('Content-Type', 'application/json').set('Accept', 'application/json');      }
    else{
      this.httpOptions.headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');    
    }

    const url = `${this.apiurl}/${b.id}`;
    return this.http.put<IBoek>(this.apiurl, b, this.httpOptions).pipe(
      map(() => b), catchError(this.handleError));
  }


  AddBooks (user: IBoek): Observable<IBoek> {
   


if(this.auths){this.httpOptions.headers = new HttpHeaders().set('Authorization','Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjZQRlBoUmhxN2xaV1FzRDFCQjRWRyJ9.eyJpc3MiOiJodHRwczovL2Nsb3VkYXBpMjAyMC5ldS5hdXRoMC5jb20vIiwic3ViIjoiWmY1aGw2NmxnRzZUWDN1NEZoemxUdktkWFpZUDJMbEFAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzU0IiwiaWF0IjoxNTkwMDA3ODI4LCJleHAiOjE1OTAwOTQyMjgsImF6cCI6IlpmNWhsNjZsZ0c2VFgzdTRGaHpsVHZLZFhaWVAyTGxBIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.gPFjAGIRULuOQMEAIFxC66jXYhsvBNh9QDgX9I6X1YF1h-KNtnGvVsnT9G9KUf7DsDxw6aBnuqIbOrnPPLSXos-Spe0kyaki0S2yqTFGZ3RjlZKoAeTRPivcc_3144N5K2SLx9It7J2SwYZ9Gz470j0T6pIaMP2LabE11L9puGYUkPZ4prbeLCo6W3fBAXrJinK5FgfAgbHt4o8M5l-6rwWuJxTmiYN0J5jBsUTlOEiD5DwUyJpwxCuIePO4VpcAcLdXv7OJ8j2g6nLAWupI2hHhPQg2ia7yrl0TyB5633dGakb07l8rB9t4QXYrEz2npeoVY3AeBkZWoE_51weRhw').set('Content-Type', 'application/json').set('Accept', 'application/json');      }
else{
  this.httpOptions.headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');    
}

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
