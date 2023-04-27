namespace CatalogoProdutos_API.CadastroProdutos.Models
{
    public class NovoProdutoModel
    {
        public string nome { get; set; }
        public decimal preco_de_venda { get; set; }
        public string descricao { get; set; }
        public int quantidade { get; set; }
        public string tipo { get; set; }
    }
}
