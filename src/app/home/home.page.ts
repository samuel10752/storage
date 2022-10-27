import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Guid } from'guid-typescript';
import { Pessoa } from '../models/pessoa.model'; //model criado
import { PessoasService } from '../services/pessoas.service'; // service criado

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    private pessoa : Pessoa //objeto pessoa que tem o modelo de negocio
    public pessoaForm : FormGroup //objeto formulario
    public arrayPessoa : any //vetor que recebe os dados do Storage


  constructor(
    private formBuilder : FormBuilder,
    private pessoaService : PessoasService,
  ) {}

  enviar(){
    if (this.pessoaForm.valid){
      this.pessoaService.inserir(this.pessoaForm.value)
  }
}

  ngOnInit() {
    //inicio da validação do formulario
    this.pessoa = {id: Guid.createEmpty(), nome:""}

    this.pessoaForm = this.formBuilder.group
    ({
      id : [this.pessoa.id],
      nome : [this.pessoa.nome, Validators.required]
    })
    //objeto service chama o metodo listarTodos()
    this.pessoaService.listarTodos().then(arrayPessoa => {this.arrayPessoa = arrayPessoa})
  }
} 
