import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/template/login/login.component';
import { ContatoComponent } from './components/template/contato/contato.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
},
{
  path:'contato',
  component: ContatoComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
