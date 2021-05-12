import { NgModule } from '@angular/core';
import { PerfilEditarComponent } from './components/template/perfil-editar/perfil-editar.component';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/template/cadastro/cadastro.component'; 
import { LoginComponent } from './components/template/login/login.component';
import { ContatoComponent } from './components/template/contato/contato.component';

const routes: Routes = [{
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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
