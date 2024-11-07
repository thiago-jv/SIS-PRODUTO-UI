import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Produto } from '../core/model';

@Injectable()
export class ProdutoService {

  produtoUrl = "http://localhost:8082/crudapi/v1/produtos";

  constructor(private http: Http) { }

  listar(): Promise<any> {
    return this.http.get(`${this.produtoUrl}`)
      .toPromise()
      .then(response => response.json());
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.produtoUrl}/${id}`)
      .toPromise()
      .then(response => null).catch(error => {
        if (error.status == 409) {
          return Promise.reject('produto de código ' + `${id}` + ' não pode ser removida, pois está em uso');
        }
      });
  }

  buscarPorCodigo(id: number): Promise<Produto> {
    return this.http.get(`${this.produtoUrl}/${id}`)
      .toPromise()
      .then(response => response.json() as Produto);
  }

  adicionar(produto: Produto): Promise<Produto> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.produtoUrl, JSON.stringify(produto), {headers})
      .toPromise()
      .then(response => response.json()).catch(error => {
        if (error.status == 409) {
          return Promise.reject('Produto de id  ' + `${produto.id}` + ' já cadastrado');
        } 
        if (error.status == 400) {
          return Promise.reject('Produto já cadastrado');
        }
      });
  }

  atualizar(produto: Produto): Promise<Produto> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json'); 

    return this.http.put(`${this.produtoUrl}/${produto.id}`,
      JSON.stringify(produto), {headers})
      .toPromise()
      .then(response => response.json() as Produto);
  }

}

