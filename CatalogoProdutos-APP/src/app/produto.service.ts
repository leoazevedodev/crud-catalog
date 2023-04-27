import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message, Produtos } from './produto';
import { Observable } from 'rxjs';
import { environment } from 'env/env';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<Produtos[]>
  {
    const url = `${environment.apiUrl}/api/v1/produtos`;
    return this.http.get<Produtos[]>(url);
  }

  deleteProduto(id : number): Observable<Message>
  {
    const url = `${environment.apiUrl}/api/v1/produtos/${id}`;
    return this.http.delete<Message>(url);
  }


}
