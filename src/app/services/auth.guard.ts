import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Injectable} from "@angular/core";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService : AuthService){}
    canActivate(): any{
        if(this.authService.isAuthenticated()) {
            return true;
        }
        else {
            this.authService.login();
        }
        throw new Error("Method not implemented.");
    }

}