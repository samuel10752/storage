import { Injectable } from '@angular/core';
import { Pessoa } from '../models/pessoa.model'; //model criado
import { Guid } from 'guid-typescript';
import { Storage } from '@ionic/storage-angular';



@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  constructor(
    private storage : Storage
  ){}

  //metodo chamado prara criar um novo reistro
  // é pessoa como argumento desse método um objeto da classe Pessoa
  inserir(argumento : Pessoa) {

    argumento.id = Guid.create() // cria o ID

    this.storage.set(argumento.id.toString(), JSON.stringify(argumento))
  }

  async listarTodos(){
    //criar um objeto na classe Pessoa, esse objeto é tipo array
    let arrayPessoa: Pessoa [] = [];

  await this.storage.forEach((value: string) =>
    {const pessoa: Pessoa = JSON.parse(value); arrayPessoa.push(pessoa)})

  //retorna o array com os valores
  return arrayPessoa;
  }
}
