import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilisateurService } from '../../utilisateur.service';

@Component({
  selector: 'ngx-detailsuser',
  templateUrl: './detailsuser.component.html',
  styleUrls: ['./detailsuser.component.scss']
})
export class DetailsuserComponent implements OnInit {
 uti :any ;
 id:number;

constructor(private route: ActivatedRoute,private router: Router,private service:UtilisateurService) { }
   
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service. getUtilisateurbyid(this.id).subscribe(res=>{this.uti=res['result']['data']});
    
  }

}
