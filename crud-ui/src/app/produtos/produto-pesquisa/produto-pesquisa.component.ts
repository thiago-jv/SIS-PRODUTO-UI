import { Component, OnInit, ViewChild } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { ToastyService } from 'ng2-toasty';
import { ErrorHanlderService } from '../../core/error-hanlder.service';

@Component({
  selector: 'app-produto-pesquisa',
  templateUrl: './produto-pesquisa.component.html',
  styleUrls: ['./produto-pesquisa.component.css']
})
export class ProdutoPesquisaComponent {

  produtos = []
  @ViewChild('tabela') grid;

  constructor(
    private produtoService: ProdutoService,
    private toasty: ToastyService,
    private errorHandler: ErrorHanlderService){}

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.produtoService.listar()
      .then(resultado => this.produtos = resultado);
      console.log(this.produtos)
  }

  excluir(produto: any) {
    this.produtoService.excluir(produto.id)
      .then(() => {
        if (this.grid.first === 0) {
          this.listar();
        } else {
          this.grid.first = 0;
        }

        this.toasty.success('Produto excluído com sucesso!');
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
  
}