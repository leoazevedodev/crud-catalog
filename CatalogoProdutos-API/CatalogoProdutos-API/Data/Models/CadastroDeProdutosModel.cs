using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CatalogoProdutos_API.Data.Models
{
    public class CadastroDeProdutosModel
    {
        [Key]
        public int id { get; set; }
        public string nome { get; set; }
        public decimal preco_de_venda { get; set; }
        public string descricao { get; set; }
        public int quantidade { get; set; }
        public string tipo { get; set; }
        public  DateTime data_de_cadastro { get; set; }
    }
}
