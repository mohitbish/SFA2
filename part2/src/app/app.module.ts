import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GroupassisComponent } from './groupassis/groupassis.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { GroupadminComponent } from './groupadmin/groupadmin.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GroupassisComponent,
    ProfileComponent,
    LogoutComponent,
    SuperadminComponent,
    GroupadminComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
