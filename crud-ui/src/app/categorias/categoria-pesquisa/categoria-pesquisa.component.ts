import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { ToastyService } from 'ng2-toasty';
import { ErrorHanlderService } from '../../core/error-hanlder.service';

@Component({
  selector: 'app-categoria-pesquisa',
  templateUrl: './categoria-pesquisa.component.html',
  styleUrls: ['./categoria-pesquisa.component.css']
})
export class CategoriaPesquisaComponent implements OnInit {

  categorias = []
  @ViewChild('tabela') grid;

  constructor(
    private categoriaService: CategoriaService,
    private toasty: ToastyService,
    private errorHandler: ErrorHanlderService){}

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.categoriaService.listar()
      .then(resultado => this.categorias = resultado);
  }

  excluir(categoria: any) {
    this.categoriaService.excluir(categoria.id)
      .then(() => {
        if (this.grid.first === 0) {
          this.listar();
        } else {
          this.grid.first = 0;
        }

        this.toasty.success('Categoria excluída com sucesso!');
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
  
}
