import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Operation } from '../../operation';
import { OperationService } from '../../operation.service';

@Component({
  selector: 'ngx-autreop',
  templateUrl: './autreop.component.html',
  styleUrls: ['./autreop.component.scss']
})
export class AutreopComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  op:Operation;
  id:number;
  constructor(private router: Router,private service: OperationService,private formBuilder:FormBuilder) { }
  ngOnInit(): void {
    console.log("dkhal");
    this.registerForm = this.formBuilder.group({
      reference: ['', Validators.required],
      matricule: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      cin: ['', Validators.required],
      motif: ['', Validators.required],
      somme: ['', Validators.required],
      typer: ['', Validators.required],

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
 // this.op=new Operation(0,form['codecaisse'],form['nomcaisse'],form['cpte'],form['montant'],true,"");

// this.service.doCreation(this.op).subscribe(res=>console.log(res));
 alert("ajouté avec succès");
 //this.router.navigate(['/pages/extra-components/alert']);

}


}
