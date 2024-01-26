import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {SigninComponent} from './signin/signin.component';
import {AuthGuard} from './auth.guard';

import {RespassComponent} from './respass/respass.component';
import {ResetpasswordComponent} from './resetpassword/resetpassword.component';
import {
  NbAuthComponent,
  NbLogoutComponent,
} from '@nebular/auth';
import { PagesComponent } from './pages/pages.component';
import { CaisseComponent } from './caisse/caisse.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { ProfilComponent } from './profil/profil.component';
import { TypeutilisateurComponent } from './typeutilisateur/typeutilisateur.component';


import { DetailsuserComponent } from './utilisateur/detailsuser/detailsuser.component';
import { AjouterutiComponent } from './utilisateur/ajouteruti/ajouteruti.component';
import { ModifierprofilComponent } from './profil/modifierprofil/modifierprofil.component';
import { AjouterbqComponent } from './banque/ajouterbq/ajouterbq.component';
import { AjoutercaiComponent } from './caisse/ajoutercai/ajoutercai.component';

import { AjoutertypeComponent } from './typeutilisateur/ajoutertype/ajoutertype.component';

import { DecaissementComponent } from './decaissement/decaissement.component';
import { EncaissementComponent } from './encaissement/encaissement.component';
import { DetailsdecaiComponent } from './decaissement/detailsdecai/detailsdecai.component';
import { DetailsencaiComponent } from './encaissement/detailsencai/detailsencai.component';
import { BanqueComponent } from './banque/banque.component';
import { AutreopComponent } from './decaissement/autreop/autreop.component';
import { TypetransactionComponent } from './typetransaction/typetransaction.component';
import { OperationmodifierComponent } from './operationmodifier/operationmodifier.component';


export const routes: Routes = [
  //first page signin
  {path:'',component:SigninComponent},
  
 
  {path:'decaissement',component:DecaissementComponent},
  {path:'encaissement',component:EncaissementComponent},
  {path:'encaissement/detailsencai',component:DetailsencaiComponent},
  {path:'decaissement/detailsdecai',component:DetailsdecaiComponent},
  {path:'decaissement/autreop',component:AutreopComponent},
  {path:'typetransaction',component:TypetransactionComponent},
  {path:'operationmodifier/:id',component:OperationmodifierComponent},
  /*modifier password*/
  {path:'respass',component:RespassComponent},
  /***caisse crud***/
  {path:'caisse',component:CaisseComponent},
  {path:'caisse/ajoutercai',component:AjoutercaiComponent},
  
/********banque crud */
  {path:'banque',component:BanqueComponent},
  {path:'banque/ajouterbq',component:AjouterbqComponent},
 

  /*******utilisateurs */
  {path:'utilisateur',component:UtilisateurComponent},
  {path:'utilisateur/detailsuser/:id',component:DetailsuserComponent},
  {path:'utilisateur/ajouteruti',component:AjouterutiComponent},
  
 
  /*************utilisateur  */
  {path:'profil',component:ProfilComponent},
  {path:'profil/modifierprofil',component:ModifierprofilComponent},
  /*****type utilisateur */
  {path:'typeutilisateur',component:TypeutilisateurComponent},
  {path:'typeutilisateur/ajoutertype',component:AjoutertypeComponent},

  //forgetpass
  {path:'resetpassword',component:ResetpasswordComponent},
  //dashboard
  {path:"pages/dashboard",component:PagesComponent},

  
  {path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  { path: 'auth',
    component: NbAuthComponent,
    children: [
      
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      { path: '', redirectTo: 'signin', pathMatch: 'full', canActivate :[AuthGuard] },
      { path: '**', redirectTo: 'pages' },
    ],
  },
  
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
