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



GetById (id: number): Observable<IBoek> {
  const url = `${this.apiurl}/${id}`;
  return this.http.get<IBoek>(url).pipe(
    catchError(this.handleError)
    );
  }


  DeleteBooks(id: number): Observable<IBoek> {

    if(this.auths){this.httpOptions.headers = new HttpHeaders().set('Authorization','Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjZQRlBoUmhxN2xaV1FzRDFCQjRWRyJ9.eyJpc3MiOiJodHRwczovL2Nsb3VkYXBpMjAyMC5ldS5hdXRoMC5jb20vIiwic3ViIjoiWmY1aGw2NmxnRzZUWDN1NEZoemxUdktkWFpZUDJMbEFAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzU0IiwiaWF0IjoxNTg5NjAwMDU2LCJleHAiOjE1ODk2ODY0NTYsImF6cCI6IlpmNWhsNjZsZ0c2VFgzdTRGaHpsVHZLZFhaWVAyTGxBIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.BdrbGs01cT8NW38Ps4cuxxLdBtsZLLZFzDJDdvK0juHSr2dqiqx10VzUVdhz14gn0vwyCNOudCvdPJDEiWNorp8qtVbXQe2gGwLGQ9clAUTMCF0GKNT7CqVR-u42tLTr2y_tRVzy62C3VY4C9XHLHvWVPXhBs9Amu_tKO0MmiRHJVrHng4m6BFX3okSvs0QeSmLfcw4BezXa1IGBwj7DYDbnTV0tAMAa9mu1AtgT8xRZ3pDzDCD_vAJXOZUYzXuNYm8ZEtFSzpGgI8eQYmGMNd22tM2YuDdybdRRO5-oESE9DveXF60PnSlS8bkO8oXcKRaUjlq0_pQEwz9oRtvNIg').set('Content-Type', 'application/json').set('Accept', 'application/json');      }
    else{
      this.httpOptions.headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');    
    }

    const url = `${this.apiurl}/${id}`;
    return this.http.delete<IBoek>(url, this.httpOptions).pipe(
      catchError(this.handleError));
 
  }




  UpdateBooks(b: IBoek): Observable<IBoek>{
    
    if(this.auths){this.httpOptions.headers = new HttpHeaders().set('Authorization','Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjZQRlBoUmhxN2xaV1FzRDFCQjRWRyJ9.eyJpc3MiOiJodHRwczovL2Nsb3VkYXBpMjAyMC5ldS5hdXRoMC5jb20vIiwic3ViIjoiWmY1aGw2NmxnRzZUWDN1NEZoemxUdktkWFpZUDJMbEFAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzU0IiwiaWF0IjoxNTg5NjAwMDU2LCJleHAiOjE1ODk2ODY0NTYsImF6cCI6IlpmNWhsNjZsZ0c2VFgzdTRGaHpsVHZLZFhaWVAyTGxBIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.BdrbGs01cT8NW38Ps4cuxxLdBtsZLLZFzDJDdvK0juHSr2dqiqx10VzUVdhz14gn0vwyCNOudCvdPJDEiWNorp8qtVbXQe2gGwLGQ9clAUTMCF0GKNT7CqVR-u42tLTr2y_tRVzy62C3VY4C9XHLHvWVPXhBs9Amu_tKO0MmiRHJVrHng4m6BFX3okSvs0QeSmLfcw4BezXa1IGBwj7DYDbnTV0tAMAa9mu1AtgT8xRZ3pDzDCD_vAJXOZUYzXuNYm8ZEtFSzpGgI8eQYmGMNd22tM2YuDdybdRRO5-oESE9DveXF60PnSlS8bkO8oXcKRaUjlq0_pQEwz9oRtvNIg').set('Content-Type', 'application/json').set('Accept', 'application/json');      }
    else{
      this.httpOptions.headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');    
    }

    const url = `${this.apiurl}/${b.id}`;
    return this.http.put<IBoek>(this.apiurl, b, this.httpOptions).pipe(
      map(() => b), catchError(this.handleError));
  }


  AddBooks (user: IBoek): Observable<IBoek> {
   


if(this.auths){this.httpOptions.headers = new HttpHeaders().set('Authorization','Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjZQRlBoUmhxN2xaV1FzRDFCQjRWRyJ9.eyJpc3MiOiJodHRwczovL2Nsb3VkYXBpMjAyMC5ldS5hdXRoMC5jb20vIiwic3ViIjoiWmY1aGw2NmxnRzZUWDN1NEZoemxUdktkWFpZUDJMbEFAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzU0IiwiaWF0IjoxNTg5NjAwMDU2LCJleHAiOjE1ODk2ODY0NTYsImF6cCI6IlpmNWhsNjZsZ0c2VFgzdTRGaHpsVHZLZFhaWVAyTGxBIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.BdrbGs01cT8NW38Ps4cuxxLdBtsZLLZFzDJDdvK0juHSr2dqiqx10VzUVdhz14gn0vwyCNOudCvdPJDEiWNorp8qtVbXQe2gGwLGQ9clAUTMCF0GKNT7CqVR-u42tLTr2y_tRVzy62C3VY4C9XHLHvWVPXhBs9Amu_tKO0MmiRHJVrHng4m6BFX3okSvs0QeSmLfcw4BezXa1IGBwj7DYDbnTV0tAMAa9mu1AtgT8xRZ3pDzDCD_vAJXOZUYzXuNYm8ZEtFSzpGgI8eQYmGMNd22tM2YuDdybdRRO5-oESE9DveXF60PnSlS8bkO8oXcKRaUjlq0_pQEwz9oRtvNIg').set('Content-Type', 'application/json').set('Accept', 'application/json');      }
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
