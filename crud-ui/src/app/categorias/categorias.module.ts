import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';

import { CategoriaCadastroComponent } from './categoria-cadastro/categoria-cadastro.component';
import { CategoriaPesquisaComponent } from './categoria-pesquisa/categoria-pesquisa.component';
import { ToolbarModule } from 'primeng/toolbar';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    DropdownModule,
    ToolbarModule,
    RouterModule
  ],
  declarations: [
    CategoriaCadastroComponent,
    CategoriaPesquisaComponent
  ],
  exports: [
    CategoriaCadastroComponent,
    CategoriaPesquisaComponent
  ]
})
export class CategoriasModule { }
