import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Categoria } from '../core/model';

@Injectable()
export class CategoriaService {

  categoriaUrl = "http://localhost:8082/crudapi/v1/categorias";

  constructor(private http: Http) { }

  listar(): Promise<any> {
    return this.http.get(`${this.categoriaUrl}`)
      .toPromise()
      .then(response => response.json());
  }

  excluir(id: number): Promise<void> {

    return this.http.delete(`${this.categoriaUrl}/${id}`)
      .toPromise()
      .then(response => null).catch(error => {
        if (error.status == 409) {
          return Promise.reject('categoria de código ' + `${id}` + ' não pode ser removida, pois está em uso');
        }
      });
  }

  buscarPorCodigo(id: number): Promise<Categoria> {

    return this.http.get(`${this.categoriaUrl}/${id}`)
      .toPromise()
      .then(response => response.json() as Categoria);
  }

  adicionar(categoria: Categoria): Promise<Categoria> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.categoriaUrl, JSON.stringify(categoria), {headers})
      .toPromise()
      .then(response => response.json()).catch(error => {
        if (error.status == 409) {
          return Promise.reject('Categoria de id  ' + `${categoria.id}` + ' já cadastrado');
        }
        if (error.status == 400) {
          return Promise.reject('Categoria já cadastrado');
        }
      });
  }

  atualizar(categoria: Categoria): Promise<Categoria> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json'); 

    return this.http.put(`${this.categoriaUrl}/${categoria.id}`,
      JSON.stringify(categoria), {headers})
      .toPromise()
      .then(response => response.json() as Categoria);
  }

}