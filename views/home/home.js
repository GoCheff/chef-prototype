var btnMaisDetalhes = document.querySelector('.btn-mais-detalhes');
var detalhesPedido = document.querySelector('.detalhes-pedido');

btnMaisDetalhes.addEventListener('click', function() {
  detalhesPedido.classList.toggle('mostrar-detalhes');
});
