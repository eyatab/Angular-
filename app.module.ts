/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule, 
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import { SigninComponent } from './signin/signin.component';

import { RespassComponent } from './respass/respass.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { CaisseComponent } from './caisse/caisse.component';
import { BanqueComponent } from './banque/banque.component';
import { AjoutercaiComponent } from './caisse/ajoutercai/ajoutercai.component';
import { AjouterbqComponent } from './banque/ajouterbq/ajouterbq.component';
import { TypeutilisateurComponent } from './typeutilisateur/typeutilisateur.component';
import { AjoutertypeComponent } from './typeutilisateur/ajoutertype/ajoutertype.component';

import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { AjouterutiComponent } from './utilisateur/ajouteruti/ajouteruti.component';



import { ProfilComponent } from './profil/profil.component';
import { ModifierprofilComponent } from './profil/modifierprofil/modifierprofil.component';



import { DetailsuserComponent } from './utilisateur/detailsuser/detailsuser.component';


import { DecaissementComponent } from './decaissement/decaissement.component';
import { DetailsdecaiComponent } from './decaissement/detailsdecai/detailsdecai.component';
import { EncaissementComponent } from './encaissement/encaissement.component';
import { DetailsencaiComponent } from './encaissement/detailsencai/detailsencai.component';


import { AuthService } from './auth.service';
import {AuthGuard} from './auth.guard';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { HttpErrorInterceptor } from './helpers/http-error.interceptor';
import { CommonModule } from '@angular/common';
import { AutreopComponent } from './decaissement/autreop/autreop.component';
import { FormInputsComponent } from './pages/forms/form-inputs/form-inputs.component';
import { PagesModule } from './pages/pages.module';
import { TypetransactionComponent } from './typetransaction/typetransaction.component';
import { OperationmodifierComponent } from './operationmodifier/operationmodifier.component';

@NgModule({
  declarations: [AppComponent,SigninComponent, ResetpasswordComponent,RespassComponent, CaisseComponent, BanqueComponent, AjoutercaiComponent,AjouterbqComponent, TypeutilisateurComponent, AjoutertypeComponent, UtilisateurComponent, AjouterutiComponent,AutreopComponent,ProfilComponent, ModifierprofilComponent, DetailsuserComponent,DecaissementComponent, DetailsdecaiComponent, EncaissementComponent, DetailsencaiComponent, AutreopComponent, TypetransactionComponent, OperationmodifierComponent, ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
    messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers : [AuthService,AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
     ],
})
export class AppModule {
}
