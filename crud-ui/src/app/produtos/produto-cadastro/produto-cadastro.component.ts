import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../categorias/categoria.service';
import { ErrorHanlderService } from '../../core/error-hanlder.service';
import { FormControl } from '@angular/forms';
import { ProdutoService } from '../produto.service';
import { Produto } from '../../core/model';
import { ToastyService } from 'ng2-toasty';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styleUrls: ['./produto-cadastro.component.css']
})
export class ProdutoCadastroComponent implements OnInit {

  produto = new Produto();
  categorias = [];

  constructor(
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService,
    private errorHandler: ErrorHanlderService,
    private toasty: ToastyService,
    private route: ActivatedRoute,
    private router: Router){
  }

  ngOnInit() {
    this.carregarCategorias();
    const id = this.route.snapshot.params['id'];
    console.log(id)
    if (id) {
      this.carregarProdutoPorId(id);
    }
  }    
  
  carregarCategorias() {
    return this.categoriaService.listar()
      .then(resultado => {
        this.categorias = resultado
          .map(c => ({label: c.descricao, value: c.id}));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarProdutoPorId(id: number) {
    this.produtoService.buscarPorCodigo(id)
      .then(retorno => {
        this.produto = retorno;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  adicionarProdutos(form: FormControl) {
    this.produtoService.adicionar(this.produto)
      .then(produtoAdicionado => {
        this.toasty.success('Produto adicionada com sucesso!');
        this.router.navigate(['/produtos', produtoAdicionado.id]);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarProdutos(form: FormControl) {
    console.log(this.produto)
    this.produtoService.atualizar(this.produto)
   
      .then(retorno => {
        this.produto = retorno;

        this.toasty.success('Produto alterado com sucesso!');
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  get editando() {
    return Boolean(this.produto.id);
  }

  novo(form: FormControl) {
    form.reset();
    this.produto = new Produto();
    this.router.navigate(['/produtos/novo']);
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizarProdutos(form);
    } else {
      this.adicionarProdutos(form);
    }
  }

}
