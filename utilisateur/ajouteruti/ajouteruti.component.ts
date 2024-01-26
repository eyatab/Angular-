import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CaisseService } from '../../caisse.service';
import { MustMatch } from '../../helpers/must-match.validator';
import { Utilisateur } from '../../utilisateur';
import { UtilisateurService } from '../../utilisateur.service';

@Component({
  selector: 'ngx-ajouteruti',
  templateUrl: './ajouteruti.component.html',
  styleUrls: ['./ajouteruti.component.scss']
})
export class AjouterutiComponent implements OnInit {
 x:boolean;
  ui:Utilisateur;
  registerForm: FormGroup;
  submitted = false;
  public id;
  role1:string;
  role2:string[];
  uii:any;
  constructor(private router: Router,private utilisateurService: UtilisateurService,private caisseService: CaisseService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
    this.caisseService.getCaisse().subscribe(res=>{this.uii=res['result']['data']});

    this.registerForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      matricule: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mdp:['', [Validators.required, Validators.minLength(6)]],
      confmdp: ['', Validators.required],
      tel:['', [Validators.required, Validators.minLength(8),Validators.maxLength(8),Validators.pattern('[- +()0-9]{8,}')]],
      profil: ['', Validators.required],
      caisse:['', Validators.required],
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
  const form=this.registerForm.value;
   this.role1=form['profil'];
   console.log(this.role1);

  if (this.role1==="Administrateur") 
  {  console.log("dkhal admin");
  this.ui = new Utilisateur(this.id,form['nom'],form['prenom'],form['matricule'],form['email'],form['mdp'],form['tel'], ["ROLE_ADMIN"],true,form['caisse']);

  } 
  else {  console.log("caisse");
  this.ui = new Utilisateur(this.id,form['nom'],form['prenom'],form['matricule'],form['email'],form['mdp'],form['tel'], ["ROLE_CAISSIER"],true,form['caisse']);
    
}
    console.log(this.ui);
  
   this.utilisateurService.doCreation(this.ui).subscribe(res=>console.log(res));

   alert("L'ajout a été efféctué avec succès");
   this.router.navigate(['/pages/extra-components/calendar']);
  }
  //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));

}

 
