import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../auth.service';
import { Utilisateur } from '../../utilisateur';
import { UtilisateurService } from '../../utilisateur.service';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'ngx-modifierprofil',
  templateUrl: './modifierprofil.component.html',
  styleUrls: ['./modifierprofil.component.scss']
})
export class ModifierprofilComponent implements OnInit {
  ui:Utilisateur;
  modifyForm: FormGroup;
  submitted = false;
  public id;
  pro :any ;
  constructor(private router: Router,private http: HttpClient,private route: ActivatedRoute,private utilisateurService: UtilisateurService,private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.modifyForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tel:['', [Validators.required, Validators.minLength(8),Validators.maxLength(8),Validators.pattern('[- +()0-9]{8,}')]],
    });
   this.utilisateurService.getUtilisateurbyusername(JSON.parse(localStorage.getItem('currentUser')).username).subscribe(res=>{this.pro=res['result']['data']
  ;
console.log(this.pro);});
  }
 // convenience getter for easy access to form fields
 get f() { return this.modifyForm.controls; }
 onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.modifyForm.invalid) {
      return;
  }
  
}
public modify(id1:number,mat:string,rol:string[],mdp:string,idcais:number){

const form=this.modifyForm.value;

this.ui = new Utilisateur(id1,form['nom'],form['prenom'],mat,form['email'],mdp,form['tel'],rol,true,idcais);
this.utilisateurService.doUpdate(this.ui).subscribe(res=>console.log(res));

alert("modifié avec succès");
this.router.navigate(['/profil']);
}

}
