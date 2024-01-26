import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Caisse } from '../../caisse';
import { CaisseService } from '../../caisse.service';

@Component({
  selector: 'ngx-ajoutercai',
  templateUrl: './ajoutercai.component.html',
  styleUrls: ['./ajoutercai.component.scss']
})
export class AjoutercaiComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  cai:Caisse;
  id:number;
  constructor(private router: Router,private caisseService: CaisseService,private formBuilder:FormBuilder) { }
  ngOnInit(): void {
    console.log("dkhal");
    this.registerForm = this.formBuilder.group({
      codecaisse: ['', Validators.required],
      nomcaisse: ['', Validators.required],
      cpte: ['', Validators.required],
      montant: ['', Validators.required],
       });}
// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }

onSubmit() {
    this.submitted = true;

 // stop here if form is invalid
 if (this.registerForm.invalid) {
     return; }
     const form=this.registerForm.value;
 // console.log(form);
  this.cai=new Caisse(0,form['codecaisse'],form['nomcaisse'],form['cpte'],form['montant'],true,"");

 this.caisseService.doCreation(this.cai).subscribe(res=>console.log(res));
 alert("ajouté avec succès");
 this.router.navigate(['/pages/extra-components/alert']);

}

 //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));

//alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.cai));
}

