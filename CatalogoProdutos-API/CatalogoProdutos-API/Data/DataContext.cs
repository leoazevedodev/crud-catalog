using CatalogoProdutos_API.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace CatalogoProdutos_API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }
        public DbSet<CadastroDeProdutosModel> Produtos { get; set; }
    }
}
