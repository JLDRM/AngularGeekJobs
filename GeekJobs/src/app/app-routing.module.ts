import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';
import { FormEmpresaComponent } from './form-empresa/form-empresa.component';
import { FormAltaofertaComponent } from './form-altaoferta/form-altaoferta.component';
import { FormLoginEmpComponent } from './form-login-emp/form-login-emp.component';
import { FormLoginGeekComponent } from './form-login-geek/form-login-geek.component';
import { PoliticaPrivacidadComponent } from './politica-privacidad/politica-privacidad.component';

const routes: Routes = [
  { path: '', component: FormLoginGeekComponent },
  { path: 'form-login-emp', component: FormLoginEmpComponent },
  { path: 'form-usuario', component: FormUsuarioComponent },
  { path: 'form-empresa', component: FormEmpresaComponent },
  { path: 'politica-privacidad', component: PoliticaPrivacidadComponent },
  { path: 'form-altaoferta', component: FormAltaofertaComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
