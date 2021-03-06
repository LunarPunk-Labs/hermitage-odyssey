
import { NgModule } from '@angular/core';
import { ContentRoutingModule } from './content-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { SummaryComponent } from './home/summary/summary.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from "./profile/profile.component";
import { PersonaComponent } from "./persona/persona.component";
import { HeaderComponent } from "./common/header/header.component"



@NgModule({
  declarations: [
    HomeComponent,
    SummaryComponent,
    SignupComponent,
    ProfileComponent,
    PersonaComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ContentRoutingModule
  ],
  providers: []
})
export class ContentModule {}
