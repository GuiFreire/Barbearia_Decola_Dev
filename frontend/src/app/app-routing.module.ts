import { HomeFuncionarioReadComponent } from './components/home-funcionario/home-funcionario-read/home-funcionario-read.component';
import { HomeFuncionarioCrudComponent } from './components/home-funcionario/home-funcionario-crud/home-funcionario-crud.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PerfilEditarComponent } from './components/template/perfil-editar/perfil-editar.component';
import { HomeFuncionarioCreateComponent } from './components/home-funcionario/home-funcionario-create/home-funcionario-create.component';
import { AgendamentoUpdateComponent } from './components/home-funcionario/agendamento-update/agendamento-update.component';
import { AgendamentoDeleteComponent } from './components/home-funcionario/agendamento-delete/agendamento-delete.component';
import { UsuarioReadComponent } from './components/usuario/usuario-read/usuario-read.component';
import { UsuarioCreateComponent } from './components/usuario/usuario-create/usuario-create.component';
import { UsuarioUpdateComponent } from './components/usuario/usuario-update/usuario-update.component';
import { UsuarioDeleteComponent } from './components/usuario/usuario-delete/usuario-delete.component';

const routes: Routes = [
  { path: '', redirectTo: 'perfis', pathMatch: 'full' },
  { path: 'editar', component: PerfilEditarComponent },
  // { path: 'perfis/:id', component: PerfilEditarComponent }
  {
    path: 'home-funcionario',
    component: HomeFuncionarioReadComponent
  },
  {
    path: "agendamento/create",
    component: HomeFuncionarioCreateComponent
  },
  {
    path: "agendamento/update",
    component: AgendamentoUpdateComponent
  },
  {
    path: "agendamento/delete",
    component: AgendamentoDeleteComponent
  },
  {
    path: 'usuario/read',
    component: UsuarioReadComponent
  },
  {
    path: "usuario/create",
    component: UsuarioCreateComponent
  },
  {
    path: "usuario/update",
    component: UsuarioUpdateComponent
  },
  {
    path: "usuario/delete",
    component: UsuarioDeleteComponent
  },

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
