import { AgendamentoService } from './../../../services/agendamento.service';
import { Agendamento } from './../../../models/agendamento.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-agendamento-update',
  templateUrl: './agendamento-update.component.html',
  styleUrls: ['./agendamento-update.component.css']
})

export class AgendamentoUpdateComponent implements OnInit {

  agendamento: Agendamento = {};

  constructor(private agendamentoService: AgendamentoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.agendamentoService.readById(id).subscribe(agendamento => {
        this.agendamento = agendamento;
      });
    }
  }

  updateAgendamento(): void {
    this.agendamentoService.update(this.agendamento).subscribe(() => {
      this.agendamentoService.showMessage('Agendamento atualizado com sucesso')
      this.router.navigate(['/home-funcionario']);
    });
  }

  cancel(): void {
    this.router.navigate(['/home-funcionario'])
  }
}
