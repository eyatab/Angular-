import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Banque } from '../../banque';
import { BanqueService } from '../../banque.service';

@Component({
  selector: 'ngx-ajouterbq',
  templateUrl: './ajouterbq.component.html',
  styleUrls: ['./ajouterbq.component.scss']
})
export class AjouterbqComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  bq:Banque;
  id:number;
  constructor(private router: Router,private banqueService: BanqueService,private formBuilder:FormBuilder) { }
  ngOnInit(): void {
    console.log("dkhal");
    this.registerForm = this.formBuilder.group({
      codebq: ['', Validators.required],
      raisonsb: ['', Validators.required],
      codecb: ['', Validators.required],
      rib: ['', Validators.required],
       });}

// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }
onSubmit() {
 this.submitted = true;

 // stop here if form is invalid
 if (this.registerForm.invalid) {
     return; }
 const form=this.registerForm.value;

 
 this.bq=new Banque(0,form['codebq'],form['raisonsb'],form['codecb'],form['rib'],true,"");
 console.log(this.bq);
 this.banqueService.doCreation(this.bq).subscribe(res=>console.log(res));
 alert("L'ajout a été effectué avec succès");
 this.router.navigate(['/pages/extra-components/alert']);
}
}

