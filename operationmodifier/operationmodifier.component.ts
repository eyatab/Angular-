import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OperationService } from '../operation.service';
import { AlertComponent } from '../pages/extra-components/alert/alert.component';

@Component({
  selector: 'ngx-operationmodifier',
  templateUrl: './operationmodifier.component.html',
  styleUrls: ['./operationmodifier.component.scss']
})
export class OperationmodifierComponent implements OnInit {
  ope :any ;
  ohh:any;
  id:number;
  modifyForm: FormGroup;
  submitted = false;
  constructor(private route: ActivatedRoute,private http: HttpClient,private formBuilder: FormBuilder,router: Router,private service:OperationService) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    
   this.service.getOperationbyid(this.id).subscribe(res=>{this.ope=res['result']['data'];
  console.log("hhhhh",this.ope);
});
    this.modifyForm = this.formBuilder.group({
      matricule: ['', Validators.required],
      recu: ['', Validators.required],
      operation: ['', Validators.required],
      somme: ['', Validators.required],
      motif: ['', Validators.required],
    });
  
    
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

}
