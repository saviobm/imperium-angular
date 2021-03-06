import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { CadastroAlunoService } from './cadastro-aluno/cadastro-aluno.service';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [CadastroAlunoComponent],
  exports: [
    CadastroAlunoComponent
  ],
  providers: [
    CadastroAlunoService
  ]
})
export class CadastroModule { }
