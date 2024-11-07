import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../core/model';
import { CategoriaService } from '../categoria.service';
import { ErrorHanlderService } from '../../core/error-hanlder.service';
import { ToastyService } from 'ng2-toasty';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categoria-cadastro',
  templateUrl: './categoria-cadastro.component.html',
  styleUrls: ['./categoria-cadastro.component.css']
})
export class CategoriaCadastroComponent implements OnInit {

  categoria = new Categoria();

  constructor(
    private categoriaService: CategoriaService,
    private errorHandler: ErrorHanlderService,
    private toasty: ToastyService,
    private route: ActivatedRoute,
    private router: Router){
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    console.log(id)
    if (id) {
      this.carregarCategoriaPorId(id);
    }
  }


  adicionarCategorias(form: FormControl) {
    this.categoriaService.adicionar(this.categoria)
      .then(categoriaAdicionada => {
        this.toasty.success('Categoria adicionada com sucesso!');
        this.router.navigate(['/categorias', categoriaAdicionada.id]);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarCategorias(form: FormControl) {
    this.categoriaService.atualizar(this.categoria)
      .then(retorno => {
        this.categoria = retorno;

        this.toasty.success('Categoria alterada com sucesso!');
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  get editando() {
    return Boolean(this.categoria.id);
  }

  novo(form: FormControl) {
    form.reset();
    this.categoria = new Categoria();
    this.router.navigate(['/categorias/novo']);
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizarCategorias(form);
    } else {
      this.adicionarCategorias(form);
    }
  }


  carregarCategoriaPorId(id: number) {
    this.categoriaService.buscarPorCodigo(id)
      .then(retorno => {
        this.categoria = retorno;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
