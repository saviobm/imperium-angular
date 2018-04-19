import { Component, OnInit } from '@angular/core';
import { Aluno } from './Aluno';
import { CadastroAlunoService } from './cadastro-aluno.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {

  aluno: Aluno;

  constructor(private cadastroAlunoService: CadastroAlunoService) {

    this.aluno = new Aluno();

  }

  ngOnInit() {
  }

  salvar(): void {

    this.cadastroAlunoService.salvar(this.aluno);

  }

}
