import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StringDecoder } from 'string_decoder';
import { AuthService } from '../auth.service';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'ngx-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  pro :any ;
  constructor(private http: HttpClient,private route: ActivatedRoute,private router: Router,private service:UtilisateurService,private authenticationService: AuthService) { }
  ngOnInit(): void {
   //this.uname=this.authenticationService.getusername();
   //console.log("uname",JSON.parse(localStorage.getItem('currentUser')).token);
   this.service.getUtilisateurbyusername(JSON.parse(localStorage.getItem('currentUser')).username).subscribe(res=>{this.pro=res['result']['data'];
   console.log(res['result']);
  });
   
  }

}
