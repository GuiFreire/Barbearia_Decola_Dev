import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PerfilEditarComponent } from './components/template/perfil-editar/perfil-editar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeFuncionarioCrudComponent } from './components/home-funcionario/home-funcionario-crud/home-funcionario-crud.component';
import { HomeFuncionarioCreateComponent } from './components/home-funcionario/home-funcionario-create/home-funcionario-create.component';
import { HomeFuncionarioReadComponent } from './components/home-funcionario/home-funcionario-read/home-funcionario-read.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { AgendamentoUpdateComponent } from './components/home-funcionario/agendamento-update/agendamento-update.component';
import { AgendamentoDeleteComponent } from './components/home-funcionario/agendamento-delete/agendamento-delete.component';
import { UsuarioCreateComponent } from './components/usuario/usuario-create/usuario-create.component';
import { UsuarioUpdateComponent } from './components/usuario/usuario-update/usuario-update.component';
import { UsuarioReadComponent } from './components/usuario/usuario-read/usuario-read.component';
import { UsuarioDeleteComponent } from './components/usuario/usuario-delete/usuario-delete.component';
import { MatDatepickerModule } from '@angular/material/datepicker';


registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    PerfilEditarComponent,
    HomeFuncionarioCrudComponent,
    HomeFuncionarioCreateComponent,
    HomeFuncionarioReadComponent,
    AgendamentoUpdateComponent,
    AgendamentoDeleteComponent,
    UsuarioCreateComponent,
    UsuarioUpdateComponent,
    UsuarioReadComponent,
    UsuarioDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule

  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
