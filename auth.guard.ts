import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

//mech 9a3da tekhdem 
@Injectable({
  providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(private router: Router ,private authService: AuthService) { 
    
  }
  canActivate()
    {
        if (localStorage.getItem('currentUser')) {
          
          // logged in so return true
          console.log(JSON.parse(localStorage.getItem('currentUser')).username );
          console.log("garad")
          return true;
        }
        
        console.log(localStorage.getItem('currentUser'));
        // not logged in so redirect to login page
        this.router.navigate(['/signin']);
        return false;
      
  }
  
}
