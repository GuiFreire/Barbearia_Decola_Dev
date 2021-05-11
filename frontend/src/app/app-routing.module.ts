import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PerfilEditarComponent } from './components/perfil-editar/perfil-editar.component';

const routes: Routes = [
  { path: '', redirectTo: 'perfis', pathMatch: 'full' },
  { path: 'editar', component: PerfilEditarComponent }
  // { path: 'perfis/:id', component: PerfilEditarComponent }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
