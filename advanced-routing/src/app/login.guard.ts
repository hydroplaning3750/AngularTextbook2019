import { Injectable, NgModule } from "@angular/core";
import { CanActivate, Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private _router: Router) { }

    canActivate(destination: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let loggedIn = Math.random() < 0.5;

        if (!loggedIn) {
            alert("You are not logged in and will be returned to the Login page");
            console.log(destination.component);
            this._router.navigate(["/login"]);
        }

        return loggedIn;
    }
}