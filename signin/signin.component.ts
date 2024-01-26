import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import { UtilisateurService } from '../utilisateur.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  username: string;
  password: string;
  error: string;
  constructor( private router: Router,
    private service: UtilisateurService,
    private authenticationService: AuthService ) {   }
    pro :any ;
    ngOnInit() {
     
     /* this.service.getUtilisateurbyusername(JSON.parse(localStorage.getItem('utilis')).username).subscribe(res=>{this.pro=res['result']['data'];
     
      localStorage.setItem('role', JSON.stringify(this.pro.role[0]));
       
  });*/
     
    }
   

    login(e) {
      e.preventDefault();
       /*appel methode login */ 
       this.authenticationService.login(this.username, this.password)
         .subscribe(result => {
           console.log(result);
           this.router.navigate(['/pages/dashboard']);
         },
         error => {'verifier votre nom d"utilisateur ou mot de passe  !  '});
         
     }

}
