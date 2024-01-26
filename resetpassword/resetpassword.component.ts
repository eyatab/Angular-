import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private router: Router,private utilisateurService: UtilisateurService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      
      email: ['', [Validators.required, Validators.email]],  
    
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
  
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
}
public send(){
  console.log("dkhal");
}
}
