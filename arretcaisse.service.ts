import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ArretcaisseService {

  constructor(private http: HttpClient,private authenticationService: AuthService) { }
  public getbycai(c:number){ 
    return this.http.get("http://127.0.0.1:8000/api_v1/arretcaisses/"+c)
    ;}
}
