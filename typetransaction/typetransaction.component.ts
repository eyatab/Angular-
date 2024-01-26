import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Typetransaction } from '../typetransaction';
import { TypetransactionService } from '../typetransaction.service';

@Component({
  selector: 'ngx-typetransaction',
  templateUrl: './typetransaction.component.html',
  styleUrls: ['./typetransaction.component.scss']
})
export class TypetransactionComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  ty:Typetransaction;
  id:number;
  constructor(private router: Router,private service: TypetransactionService,private formBuilder:FormBuilder) { }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      code: ['', Validators.required],
      nom: ['', Validators.required],
      typeop: ['', Validators.required],
       });
  }

// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }
onSubmit() {
 this.submitted = true;

 // stop here if form is invalid
 if (this.registerForm.invalid) {
     return; }
 const form=this.registerForm.value;
 this.ty=new Typetransaction(0,form['code'],form['nom'],form['typeop']);
 console.log(this.ty);
 this.service.doCreation(this.ty).subscribe(res=>console.log(res));
 alert("L'ajout a été effectué avec succès");
 this.submitted = false;
 this.registerForm.reset();
 
}}
