import { AgendamentoService } from './../../../services/agendamento.service';
import { Agendamento } from './../../../models/agendamento.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-funcionario-create',
  templateUrl: './home-funcionario-create.component.html',
  styleUrls: ['./home-funcionario-create.component.css']
})
export class HomeFuncionarioCreateComponent implements OnInit {

  agendamento: Agendamento = {}

  constructor(private agendamentoService: AgendamentoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createAgendamento(): void {
    this.agendamentoService.create(this.agendamento).subscribe(() => {
      this.agendamentoService.showMessage('Agendamento criado!')

      this.router.navigate(['/home-funcionario'])
    })

  }

  cancel(): void {
    this.router.navigate(['/home-funcionario'])
  }

}
