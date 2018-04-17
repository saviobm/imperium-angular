import { Injectable } from '@angular/core';
import { Aluno } from './Aluno';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { RequestOptions, Headers, Http, Response } from '@angular/http';


@Injectable()
export class CadastroAlunoService {

  private headersAntigo = new Headers({ 'Content-Type': 'application/json' });
  private optionsAntigo = new RequestOptions({ headers: this.headersAntigo });

  private headers = new HttpHeaders().set( 'Content-Type', 'application/json');

  url = 'http://localhost:8080/aluno-controller';

  constructor(private http: Http) { }

  salvar(aluno: Aluno): void {

    /*this.http.post(this.url + '/salvar', aluno, { headers: this.headers  })
        .toPromise().then(this.retornoSucesso).catch(this.retornoErro);*/

    this.http.post(this.url + '/salvar', aluno, this.optionsAntigo)
        .toPromise().then(this.retornoSucesso).catch(this.retornoErro);

  }

  retornoSucesso(response: Response): void {
  }

  retornoErro(error: Response | any): void {

  }

}
