import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import { Utilisateur } from './utilisateur';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { HttpErrorInterceptor } from './helpers/http-error.interceptor';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  constructor(private http: HttpClient,private authenticationService: AuthService) { }

  public doCreation(utilisateur: Utilisateur): Observable<any> { 
   console.log("service");
  return this.http.post<any>("http://127.0.0.1:8000/api_v1/users",utilisateur);}


  public doUpdate(utilisateur: Utilisateur): Observable<any> { 
    
   return this.http.put<any>("http://127.0.0.1:8000/api_v1/users/up/" + utilisateur.id,utilisateur);}
   
  public getUtilisateur(){ 
    return this.http.get("http://127.0.0.1:8000/api_v1/users");
   }
   
   public Updatemdp(utilisateur: Utilisateur,pass1:string): Observable<any> { 
    
    return this.http.put<any>("http://127.0.0.1:8000/api_v1/users/change/" +utilisateur.id+'/'+pass1,utilisateur);}


    
  public getUtilisateurbyid(id :number) { return this.http.get("http://127.0.0.1:8000/api_v1/users/"+id); }
  public getUtilisateurbyusername(un:string){return this.http.get("http://127.0.0.1:8000/api_v1/users/find/"+un);}
  public getlistbyusername(un:string){return this.http.get("http://127.0.0.1:8000/api_v1/users/findlist/"+un);}

  public doDelete(id: number): Observable<number> { return this.http.delete<number>("http://127.0.0.1:8000/api_v1/users/" + id); }
  public doRestore(id:number,utilisateur: Utilisateur): Observable<any> { 
    return this.http.put("http://127.0.0.1:8000/api_v1/users/" + id,utilisateur);
  
  }
  


}
