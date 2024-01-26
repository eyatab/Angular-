import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from '../helpers/must-match.validator';
import { AlertComponent } from '../pages/extra-components/alert/alert.component';
import { Utilisateur } from '../utilisateur';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'ngx-respass',
  templateUrl: './respass.component.html',
  styleUrls: ['./respass.component.css']
})
export class RespassComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  uii:Utilisateur;
  id:number;
  ui:Utilisateur;
  pass:string;
  mdp3:string;
  constructor(private router: Router,private utilisateurService: UtilisateurService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      matricule: ['', [Validators.required]],
      mdp:['', [Validators.required, Validators.minLength(6)]],
      confmdp: ['', Validators.required],
    }, {
      validator: MustMatch('mdp', 'confmdp' )
  });
  
  }
// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }
onSubmit() {
 this.submitted = true;
 // stop here if form is invalid
 if (this.registerForm.invalid) {
     return;
     
 }
 //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
 const form=this.registerForm.value;

 this.utilisateurService.getUtilisateurbyusername(JSON.parse(localStorage.getItem('utilis')).username).subscribe(res=>{this.uii=res['result']['data'];
 if (JSON.parse(localStorage.getItem('utilis')).username===form['matricule']) 
 {  
  
  console.log(form['matricule']);
  console.log(this.uii.id)

 this.utilisateurService.Updatemdp(this.uii,form['mdp']).subscribe(res=>{this.uii=res['result']['data']});
  alert("Mot de passe est changé avec succès");
  this.router.navigate(['/pages/dashboard']);
}
  
 else { alert("Matricule est incorrecte");
 location.reload();
}
 });


 
 // 
  
 
   

}
  

  

}
