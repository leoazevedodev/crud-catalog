using CatalogoProdutos_API.CadastroProdutos.Models;
using CatalogoProdutos_API.Data.Models;
using Microsoft.AspNetCore.Mvc;

namespace CatalogoProdutos_API.CadastroProdutos.Controllers
{
    public class CadastroProdutosController : ControllerBase
    {
        private readonly ICadastroProdutos _cadastroProdutos;
        public CadastroProdutosController(ICadastroProdutos cadastroProdutos)
        {
            _cadastroProdutos = cadastroProdutos;
        }
        [HttpGet]
        [Route("api/v1/produtos")]
        public async Task<IActionResult> ObterProduto()
        {
            try
            {
                var produtos = await _cadastroProdutos.ObterProduto();
                return Ok(produtos);
            } 
            catch(Exception ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }
        [HttpGet]
        [Route("api/v1/produtos/{id}")]
        public async Task<IActionResult> ObterProdutoById(int id)
        {
            try
            {
                var produto = await _cadastroProdutos.ObterProdutoById(id);
                return Ok(produto);
            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }
        [HttpPost]
        [Route("api/v1/produtos")]
        public async Task<IActionResult> AddProduto([FromBody] NovoProdutoModel produto)
        {
            try
            {
                var message = await _cadastroProdutos.AddProduto(produto);
                return Ok(new {Message = message});
            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }
        [HttpPut]
        [Route("api/v1/produtos/{id}")]
        public async Task<IActionResult> UpdateProduto([FromBody] NovoProdutoModel produto, int id)
        {
            try
            {
                var message = await _cadastroProdutos.UpdateProduto(produto, id);
                return Ok(new { Message = message });
            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }
        [HttpDelete]
        [Route("api/v1/produtos/{id}")]
        public async Task<IActionResult> ApagarProduto(int id)
        {
            try
            {
                var message = await _cadastroProdutos.ApagarProduto(id);
                return Ok(new { Message = message });
            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = ex.Message});
            }
        }
    }
}
