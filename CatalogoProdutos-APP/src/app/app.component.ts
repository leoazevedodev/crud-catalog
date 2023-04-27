import { Component } from '@angular/core';
import { Produtos } from './produto';
import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CatalogoProdutos-APP';

  teste = [
    {
      "id": 1,
      "nome": "NovoProduto",
      "preco_de_venda": 1510,
      "descricao": "NovoProdutoUpdate",
      "quantidade": 10,
      "tipo": "eo",
      "data_de_cadastro": "2023-04-25T19:23:10.6699754"
    },
    {
      "id": 2,
      "nome": "TESTE",
      "preco_de_venda": 1544.45,
      "descricao": "ASDASD",
      "quantidade": 200,
      "tipo": "ASDAS",
      "data_de_cadastro": "2023-04-25T19:33:04.4231628"
    },
    {
      "id": 2,
      "nome": "TESTE",
      "preco_de_venda": 1544.45,
      "descricao": "ASDASD",
      "quantidade": 200,
      "tipo": "ASDAS",
      "data_de_cadastro": "2023-04-25T19:33:04.4231628"
    },
    {
      "id": 2,
      "nome": "TESTE",
      "preco_de_venda": 1544.45,
      "descricao": "ASDASD",
      "quantidade": 200,
      "tipo": "ASDAS",
      "data_de_cadastro": "2023-04-25T19:33:04.4231628"
    },
    {
      "id": 2,
      "nome": "TESTE",
      "preco_de_venda": 1544.45,
      "descricao": "ASDASD",
      "quantidade": 200,
      "tipo": "ASDAS",
      "data_de_cadastro": "2023-04-25T19:33:04.4231628"
    },
    {
      "id": 2,
      "nome": "TESTE",
      "preco_de_venda": 1544.45,
      "descricao": "ASDASD",
      "quantidade": 200,
      "tipo": "ASDAS",
      "data_de_cadastro": "2023-04-25T19:33:04.4231628"
    },
    {
      "id": 2,
      "nome": "TESTE",
      "preco_de_venda": 1544.45,
      "descricao": "ASDASD",
      "quantidade": 200,
      "tipo": "ASDAS",
      "data_de_cadastro": "2023-04-25T19:33:04.4231628"
    },
    
  ];


  produtos: Produtos[] = [];
  itensPorPagina = 5;
  totalItens = 0;
  totalPaginas = 0;
  paginaAtual = 1;


  constructor(private produtoService: ProdutoService) { }

  ngOnInit() 
  {
    this.getProdutos();
  }

  getProdutosPagina()
  {
    const startIndex = (this.paginaAtual - 1) * this.itensPorPagina;
    const endIndex = startIndex + this.itensPorPagina;
    return this.produtos.slice(startIndex, endIndex);

  }

  setPagina(pagina: number) {
    this.paginaAtual = pagina;
  }

  getPagina() {
    const paginaCount = Math.ceil(this.produtos.length / this.itensPorPagina);
    const paginas = [];
    for (let i = 1; i <= paginaCount; i++) {
      paginas.push(i);
    }
    return paginas;
  }

  getProdutos()
  {
    this.produtoService.getProdutos().subscribe(
      (response) => {
        this.produtos = response;
        this.totalItens = response.length;
        this.totalPaginas = Math.ceil(this.totalItens / this.itensPorPagina);
      },
      (error) => {

      }
    )
  }

  deleteProdutos(id: number)
  {
    this.produtoService.deleteProduto(id).subscribe(
      (response) => {
        this.getProdutos();
      },
      (error) => {

      }
    )
  }




}
