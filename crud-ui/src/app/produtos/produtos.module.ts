import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { MenubarModule } from 'primeng/menubar';
import {ToolbarModule} from 'primeng/toolbar';

import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';
import { ProdutoPesquisaComponent } from './produto-pesquisa/produto-pesquisa.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    TableModule,
    TooltipModule,
    MenubarModule,
    ToolbarModule,
    RouterModule
  ],
  declarations: [
    ProdutoCadastroComponent,
    ProdutoPesquisaComponent
  ],
  exports: [
    ProdutoCadastroComponent,
    ProdutoPesquisaComponent,
  ]
})
export class ProdutosModule { }
