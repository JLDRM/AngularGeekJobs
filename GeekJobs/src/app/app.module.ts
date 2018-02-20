import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';
import { FormEmpresaComponent } from './form-empresa/form-empresa.component';
import { FormAltaofertaComponent } from './form-altaoferta/form-altaoferta.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistroUsuarioComponent,
    HeaderComponent,
    FooterComponent,
    FormEmpresaComponent,
    FormUsuarioComponent,
    FormAltaofertaComponent

  ],
  imports: [
    BrowserModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
