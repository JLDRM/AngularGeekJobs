import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';
import { FormEmpresaComponent } from './form-empresa/form-empresa.component';
import { FormAltaofertaComponent } from './form-altaoferta/form-altaoferta.component';
import {FormLoginGeekComponent} from './form-login-geek/form-login-geek.component';
import {FormLoginEmpComponent} from './form-login-emp/form-login-emp.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { AppRoutingModule } from './app-routing.module';

import { GeekService } from './geek.service';

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
    PerfilUsuarioComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule.forRoot()

  ],
  providers: [GeekService],
  bootstrap: [AppComponent]
})
export class AppModule { }
