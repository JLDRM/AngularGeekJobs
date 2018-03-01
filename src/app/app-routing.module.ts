import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';
import { FormEmpresaComponent } from './form-empresa/form-empresa.component';
import { FormAltaofertaComponent } from './form-altaoferta/form-altaoferta.component';
import { FormLoginEmpComponent } from './form-login-emp/form-login-emp.component';
import { FormLoginGeekComponent } from './form-login-geek/form-login-geek.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { RegistroOfertaComponent } from './registro-oferta/registro-oferta.component';
import { RegistroEmpresaComponent } from './registro-empresa/registro-empresa.component';
import { PoliticaPrivacidadComponent } from './politica-privacidad/politica-privacidad.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { HomeEmpresaComponent } from './home-empresa/home-empresa.component';
import { HomeGeekComponent } from './home-geek/home-geek.component';
import { PaginaConstruccionComponent } from './pagina-construccion/pagina-construccion.component';
//import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeGeekComponent },
  { path: 'login-emp', component: HomeEmpresaComponent },
  { path: 'login-geek', component: HomeGeekComponent },
  { path: 'form-usuario', component: RegistroUsuarioComponent },
  { path: 'form-empresa', component: RegistroEmpresaComponent },
  { path: 'form-oferta', component: RegistroOfertaComponent },
  { path: 'politica-privacidad', component: PoliticaPrivacidadComponent },
  { path: 'perfil-usuario', component: PerfilUsuarioComponent },
  { path: 'pagina-construccion', component: PaginaConstruccionComponent },
  //{ path: 'contacto', component: ContactoComponent }
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
