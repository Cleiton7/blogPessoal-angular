import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../service/postagem.service';
import { Postagem } from '../model/postagem';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})

// Tudo que está dentro dessa classe se refere à minha lógica
// Tudo que está dentro do constructor() se refere à injeção de dependências
// Tudo que está dentro de ngOnInit() é o que será carregado quando abrir a aplicação
export class FeedComponent implements OnInit {

  imagemPerfil:string = "assets/images/perfil.jpg";

  // Chama a classe Postagem da nossa model
  listaPostagens: Postagem []

  constructor(private postagemService: PostagemService) { }

  ngOnInit() {
    this.findallPostagens()
  }

  // Método para trazer todas as postagens que tenho registradas
  findallPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem []) => {
      this.listaPostagens = resp
    })
  }

}
