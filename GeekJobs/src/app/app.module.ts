import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { FormEmpresaComponent } from './form-empresa/form-empresa.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistroUsuarioComponent,
    FormEmpresaComponent
  ],
  imports: [
    BrowserModule,NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
