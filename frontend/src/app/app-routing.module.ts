import { HomeFuncionarioReadComponent } from './components/home-funcionario/home-funcionario-read/home-funcionario-read.component';
import { HomeFuncionarioCrudComponent } from './components/home-funcionario/home-funcionario-crud/home-funcionario-crud.component';
import { NgModule } from '@angular/core';
import { PerfilEditarComponent } from './components/template/perfil-editar/perfil-editar.component';
import { HomeFuncionarioCreateComponent } from './components/home-funcionario/home-funcionario-create/home-funcionario-create.component';
import { AgendamentoUpdateComponent } from './components/home-funcionario/agendamento-update/agendamento-update.component';
import { AgendamentoDeleteComponent } from './components/home-funcionario/agendamento-delete/agendamento-delete.component';
import { UsuarioReadComponent } from './components/usuario/usuario-read/usuario-read.component';
import { UsuarioCreateComponent } from './components/usuario/usuario-create/usuario-create.component';
import { UsuarioUpdateComponent } from './components/usuario/usuario-update/usuario-update.component';
import { UsuarioDeleteComponent } from './components/usuario/usuario-delete/usuario-delete.component';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/template/cadastro/cadastro.component';
import { LoginComponent } from './components/template/login/login.component';
import { ContatoComponent } from './components/template/contato/contato.component';
import { ProdutoDeleteComponent } from './components/produto/produto-delete/produto-delete.component';
import { ProdutoUpdateComponent } from './components/produto/produto-update/produto-update.component';
import { ProdutoCreateComponent } from './components/produto/produto-create/produto-create.component';
import { ProdutoReadComponent } from './components/produto/produto-read/produto-read.component';
import { HomeClienteReadComponent } from './components/home-cliente/home-cliente-read/home-cliente-read.component';


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
  {
    path: 'produto/read',
    component: ProdutoReadComponent
  },
  {
    path: "produto/create",
    component: ProdutoCreateComponent
  },
  {
    path: "produto/update/:id",
    component: ProdutoUpdateComponent
  },
  {
    path: "produto/delete/:id",
    component: ProdutoDeleteComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'contato',
    component: ContatoComponent
  },
  {
    path: 'perfil',
    component: PerfilEditarComponent
  },
  {
    path: 'home-cliente',
    component: HomeClienteReadComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
