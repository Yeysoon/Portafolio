import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { BodyComponent } from './Components/body/body.component';
import { TeconologyComponent } from './Components/teconology/teconology.component';
import { ProyectsComponent } from './Components/proyects/proyects.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { VitaeComponent } from './Components/vitae/vitae.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    TeconologyComponent,
    ProyectsComponent,
    ContactoComponent,
    VitaeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
