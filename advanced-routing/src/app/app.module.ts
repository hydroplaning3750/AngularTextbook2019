import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//These must be imported to bind UI controls to form data (https://stackoverflow.com/questions/49796212/angular-material-icons-not-working?rq=1)
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
//This must be imported to inject and use HttpClient in components
import { HttpClientModule } from '@angular/common/http';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginGuard } from './login.guard';
import { UnsavedChangedGuard } from './unsaved-changes.guard';
import { DataComponent } from './data/data.component';
import { DataResolver } from './data/data.resolver';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProductDetailComponent,
    DataComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressBarModule
  ],
  providers: [
    LoginGuard,
    UnsavedChangedGuard,
    DataResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
