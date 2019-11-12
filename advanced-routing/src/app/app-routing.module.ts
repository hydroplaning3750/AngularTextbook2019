import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginGuard } from './login.guard';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { UnsavedChangedGuard } from './unsaved-changes.guard';
import { DataComponent } from './data/data.component';
import { DataResolver } from './data/data.resolver';
import { ChatComponent } from './chat/chat.component';
import { ShippingModule } from './shipping/shipping.module';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'product', component: ProductDetailComponent, 
    canActivate: [LoginGuard],
    canDeactivate: [UnsavedChangedGuard]
  },
  { path: 'myData', component: DataComponent,
    resolve: {
      loadedJsonData: DataResolver
    },
    runGuardsAndResolvers: 'always' //This is needed if you wish to reload the active route (user clicks on link of current page)
  },
  { path: 'home', component: HomeComponent },
  { path: 'chat', component: ChatComponent , outlet: 'aux'},
  { path: 'shipping', loadChildren: () => ShippingModule }, //Lazy-loading of a module
  { path: 'luxury', loadChildren: './luxury/luxury.module#LuxuryModule' }  //Lazy-loading of a module
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { 
      onSameUrlNavigation: 'reload',  //This is needed if you wish to reload the active route (user clicks on link of current page)
      preloadingStrategy: PreloadAllModules //Instructs Angular to preload lazy modules in the background while user interacts with app
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
