import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login = {
    email: '',
    senha: '',

  };
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  saveLogin(): void {
    const data = {
      email: this.login.email,
      senha: this.login.senha

    };

    this.loginService.create(data)
      .subscribe(
        response => {
          console.log(response);

        },
        error => {
          console.log(error);
        });
  }

}
