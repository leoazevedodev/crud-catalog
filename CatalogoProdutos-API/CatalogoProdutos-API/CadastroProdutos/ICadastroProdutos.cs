using CatalogoProdutos_API.CadastroProdutos.Models;
using CatalogoProdutos_API.Data.Models;

namespace CatalogoProdutos_API.CadastroProdutos
{
    public interface ICadastroProdutos
    {
        Task<List<CadastroDeProdutosModel>> ObterProduto();
        Task<CadastroDeProdutosModel> ObterProdutoById(int id);
        Task<string> AddProduto(NovoProdutoModel produto);
        Task<string> UpdateProduto(NovoProdutoModel produto, int id);
        Task<string> ApagarProduto(int id);
    }
}
