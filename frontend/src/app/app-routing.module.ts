import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/template/cadastro/cadastro.component'; 
import { LoginComponent } from './components/template/login/login.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
},
{
  path: 'cadastro',
  component: CadastroComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
