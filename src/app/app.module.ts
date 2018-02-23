import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';
import { FormEmpresaComponent } from './form-empresa/form-empresa.component';
import { FormAltaofertaComponent } from './form-altaoferta/form-altaoferta.component';
import { FormLoginGeekComponent } from './form-login-geek/form-login-geek.component';
import { FormLoginEmpComponent } from './form-login-emp/form-login-emp.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { AppRoutingModule } from './app-routing.module';

import { GeekService } from './servicios/geek.service';
import { RegistroEmpresaComponent } from './registro-empresa/registro-empresa.component';
import { RegistroOfertaComponent } from './registro-oferta/registro-oferta.component';
import { PoliticaPrivacidadComponent } from './politica-privacidad/politica-privacidad.component';
import { HomeGeekComponent } from './home-geek/home-geek.component';
import { HomeEmpresaComponent } from './home-empresa/home-empresa.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroUsuarioComponent,
    HeaderComponent,
    FooterComponent,
    FormEmpresaComponent,
    FormUsuarioComponent,
    FormAltaofertaComponent,
    FormLoginGeekComponent,
    FormLoginEmpComponent,
    PerfilUsuarioComponent,
    RegistroEmpresaComponent,
    RegistroOfertaComponent,
    PoliticaPrivacidadComponent,
    HomeGeekComponent,
    HomeEmpresaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [GeekService],
  bootstrap: [AppComponent]
})
export class AppModule { }
