import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Categoria',
        items: [
          { label: 'Listar', icon: 'pi pi-fw pi-list', routerLink: ['/categorias'] }, 
          { label: 'Adicionar', icon: 'pi pi-fw pi-plus', routerLink: ['/categorias/novo'] }  
        ]
      },
      {
        label: 'Produto',
        items: [
          { label: 'Listar', icon: 'pi pi-fw pi-list', routerLink: ['/produtos'] },  
          { label: 'Adicionar', icon: 'pi pi-fw pi-plus', routerLink: ['/produtos/novo'] }  
        ]
      }
    ];
  }

}
