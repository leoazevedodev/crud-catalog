import { Component, ViewEncapsulation } from '@angular/core';
import { Produtos } from './produto';
import { ProdutoService } from './produto.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService],
  encapsulation: ViewEncapsulation.None


})
export class AppComponent {
  title = 'CatalogoProdutos';
  
  produtos: Produtos[] = [];

  produto = {} as Produtos;

  itensPorPagina = 5;
  totalItens = 0;
  totalPaginas = 0;
  paginaAtual = 1;

  display: boolean = false;

  dropdown: { label: string, value: string } [] = [];

  view: boolean = false;

  constructor(private produtoService: ProdutoService,
              private messageService: MessageService
              )  { }

  ngOnInit() 
  {
    this.getProdutos();
    this.dropdown = [
      {label: 'Orgânico', value: 'Orgânico'},
      {label: 'Não Orgânico', value: 'Não Orgânico'}
    ];
  }

  abrirFormulario() {
    this.display = true;
  }

  fecharFormulario() {
    this.produto = {} as Produtos;
    this.display = false;
  }

  alterarVizualicaoTable() {
    this.view = false;
  }

  alterarVizualicaoGrid() {
    this.view = true;
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
        let message = error.error.message;
        this.messageService.add( { sticky: true, severity:'error', closable: true, summary:'Falha de conexão com servidor', detail: message } ) ;
      }
    )
  }

  getProduosById(id: number)
  {
    this.produtoService.getProdutosById(id).subscribe(
      (response) => {
        this.produto = response;
        this.abrirFormulario();
      },
      (error) => {
        let message = error.error.message;
        this.messageService.add( { sticky: true, severity:'error', closable: true, summary:'Falha de conexão com servidor', detail: message } ) ;
      }
    )
  }

  deleteProdutos(id: number)
  {
    this.produtoService.deleteProduto(id).subscribe(
      (response) => {
        this.messageService.add( { sticky: true, severity:'success', closable: true, summary:'Produto Deletado !', detail: response.message } )
        this.getProdutos();
      },
      (error) => {
        let message = error.error.message;
        this.messageService.add( { sticky: true, severity:'error', closable: true, summary:'Falha de conexão com servidor', detail: message } ) ;
      }
    )
  }

  verificaCampos()
  {
    if(this.produto.nome == null || this.produto.nome == " ")
    {
      this.messageService.add( { sticky: true, severity:'error', closable: true, summary:'Falha de conexão com servidor', detail: "Preencha o nome do produto corretamente" } ) ;
      return;
    } else if(this.produto.preco_de_venda == null )
    {
      this.messageService.add( { sticky: true, severity:'error', closable: true, summary:'Falha de conexão com servidor', detail: "Preencha o preço de venda corretamente" } ) ;
      return;
    } else if(this.produto.descricao == null || this.produto.descricao == " ")
    {
      this.messageService.add( { sticky: true, severity:'error', closable: true, summary:'Falha de conexão com servidor', detail: "Preencha a descricao corretamente" } ) ;
      return;
    } else if(this.produto.tipo == null || this.produto.tipo == " ")
    {
      this.messageService.add( { sticky: true, severity:'error', closable: true, summary:'Falha de conexão com servidor', detail: "Tipo do produto deve ser selecionado" } ) ;
      return;
    } else if(this.produto.quantidade == null)
    {
      this.messageService.add( { sticky: true, severity:'error', closable: true, summary:'Falha de conexão com servidor', detail: "Preencha a quantidade corretamente" } ) ;
      return;
    }
    this.adicionarProduto();
  }

  adicionarProduto()
  {
    this.produtoService.adicionarProduto(this.produto).subscribe(
      (response) => {
        this.messageService.add( { sticky: true, severity:'success', closable: true, summary:'Produto Cadastrado !', detail: response.message } )
        this.getProdutos();
        this.fecharFormulario();
      },
      (error) => {
        let message = error.error.message;
        this.messageService.add( { sticky: true, severity:'error', closable: true, summary:'Falha de conexão com servidor', detail: message } ) ;
      }
    )
  }

  atualizarProduto()
  {
    this.produtoService.atualizarProduto(this.produto).subscribe(
      (response) => {
        this.messageService.add( { sticky: true, severity:'success', closable: true, summary:'Produto Atualizado !', detail: response.message } )
        this.getProdutos();
        this.fecharFormulario();
      },
      (error) => {
        let message = error.error.message;
        this.messageService.add( { sticky: true, severity:'error', closable: true, summary:'Falha de conexão com servidor', detail: message } ) ;
      }
    )
  }

  submited(){
    if(this.produto.id != undefined)
    {
      this.atualizarProduto();
    }
    else {
      this.verificaCampos();
    }
  }




}
