using CatalogoProdutos_API.CadastroProdutos.Models;
using CatalogoProdutos_API.Data;
using CatalogoProdutos_API.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace CatalogoProdutos_API.CadastroProdutos
{
    public class CadastroProdutos : ICadastroProdutos
    {
        private readonly DataContext _context;
        public CadastroProdutos(DataContext context)
        {
            _context = context;
        }   
        public async Task<List<CadastroDeProdutosModel>> ObterProduto()
        {
            try
            {
                var produtos = await _context.Produtos.ToListAsync();
                return produtos;
            }
            catch (Exception ex)
            {
                throw new Exception($"Não foi possivel obter produtos, { ex.Message }");
            }

        }
        public async Task<CadastroDeProdutosModel> ObterProdutoById(int id)
        {
            try
            {
                var produto = await _context.Produtos.FindAsync(id);
                return produto;
            }
            catch (Exception ex)
            {
                throw new Exception($"Não foi possivel obter produtos, {ex.Message}");
            }

        }
        public async Task<string> AddProduto(NovoProdutoModel produto)
        {
            try
            {
                var novoProduto = new CadastroDeProdutosModel();

                novoProduto.descricao = produto.descricao;
                novoProduto.nome = produto.nome;
                novoProduto.tipo = produto.tipo;
                novoProduto.preco_de_venda = produto.preco_de_venda;
                novoProduto.quantidade = produto.quantidade;
                novoProduto.data_de_cadastro = DateTime.Now;

                await _context.Produtos.AddAsync(novoProduto);
                await _context.SaveChangesAsync();

                return "Produto cadastrado com sucesso";
            }
            catch (Exception ex)
            {
                throw new Exception($"Não foi possivel cadastrar o produto, {ex.Message}");
            }
        }
        public async Task<string> UpdateProduto(NovoProdutoModel produto, int id)
        {
            try
            {
                var produtoAntigo = await _context.Produtos.FindAsync(id);

                produtoAntigo.descricao = produto.descricao;
                produtoAntigo.nome = produto.nome;
                produtoAntigo.tipo = produto.tipo;
                produtoAntigo.preco_de_venda = produto.preco_de_venda;
                produtoAntigo.quantidade = produto.quantidade;

                _context.Produtos.Update(produtoAntigo);
                await _context.SaveChangesAsync();

                return "Produto atualizado com sucesso";
            }
            catch (Exception ex)
            {
                throw new Exception($"Não foi possivel atualizar o produto, {ex.Message}");
            }
        }
        public async Task<string> ApagarProduto(int id)
        {
            try
            {
                var produto = await _context.Produtos.FindAsync(id);

                _context.Produtos.Remove(produto);
                await _context.SaveChangesAsync();

                return "Produto deletado com sucesso";
            }
            catch (Exception ex)
            {
                throw new Exception($"Não foi possivel deletar o produto, {ex.Message}");
            }
        }
    }
}
