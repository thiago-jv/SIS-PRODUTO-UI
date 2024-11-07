import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastyModule } from 'ng2-toasty';

import { CategoriasModule } from './categorias/categorias.module';
import { ProdutosModule } from './produtos/produtos.module';
import { CoreModule } from './core/core.module';

import { CategoriaService } from './categorias/categoria.service';
import { ProdutoService } from './produtos/produto.service';
import { ErrorHanlderService } from './core/error-hanlder.service';

import {Routes, RouterModule} from '@angular/router';
import { CategoriaPesquisaComponent } from './categorias/categoria-pesquisa/categoria-pesquisa.component';
import { CategoriaCadastroComponent } from './categorias/categoria-cadastro/categoria-cadastro.component';
import { ProdutoCadastroComponent } from './produtos/produto-cadastro/produto-cadastro.component';
import { ProdutoPesquisaComponent } from './produtos/produto-pesquisa/produto-pesquisa.component';

const routes: Routes = [

  {path: 'categorias', component: CategoriaPesquisaComponent},
  {path: 'categorias/novo', component: CategoriaCadastroComponent},
  {path: 'categorias/:id', component: CategoriaCadastroComponent},
  {path: 'produtos', component: ProdutoPesquisaComponent},
  {path: 'produtos/novo', component: ProdutoCadastroComponent},
  {path: 'produtos/:id', component: ProdutoCadastroComponent}

];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CategoriasModule,
    ProdutosModule,
    CoreModule,
    HttpModule,
    ToastyModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [CategoriaService, ProdutoService, ErrorHanlderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
