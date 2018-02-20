import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';
import { FormEmpresaComponent } from './form-empresa/form-empresa.component';
import { FormAltaofertaComponent } from './form-altaoferta/form-altaoferta.component';

const routes: Routes =[
  {path: 'form-usuario', component: FormUsuarioComponent},
  {path: 'form-empresa', component: FormEmpresaComponent},
  {path: 'form-usuario', component: FormAltaofertaComponent}
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
