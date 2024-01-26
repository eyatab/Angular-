import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Banque } from '../banque';
import { BanqueService } from '../banque.service';

@Component({
  selector: 'ngx-banque',
  templateUrl: './banque.component.html',
  styleUrls: ['./banque.component.scss']
})
export class BanqueComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    }


  }


