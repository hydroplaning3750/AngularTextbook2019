import { Injectable, NgModule } from "@angular/core";
import { CanDeactivate } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@Injectable()
export class UnsavedChangedGuard implements CanDeactivate<ProductDetailComponent> {
    canDeactivate(component: ProductDetailComponent, currentRoute: import("@angular/router").ActivatedRouteSnapshot, currentState: import("@angular/router").RouterStateSnapshot, nextState?: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        if (component.name.dirty) { 
            return window.confirm("You have unsaved changes. Are you sure you wish to leave?");
        } else {
            return true;
        }
    }
}