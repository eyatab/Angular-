import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Utilisateur } from '../utilisateur';
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    currentUser: Utilisateur;

    constructor(private authenticationService: AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        this.currentUser= this.authenticationService.getCurrentUser();
        if (this.currentUser && this.authenticationService.getToken()) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${this.authenticationService.getToken()['token']}`,
                    'Access-Control-Allow-Origin': '*'
                }
            });
        }
        return next.handle(request);
    }
}