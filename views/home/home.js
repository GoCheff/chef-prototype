var btnPedidos = document.getElementById("btnpedidos");
var btnTodosPedidos = document.getElementById("btntodospedidos");
var btnReceitas = document.getElementById("btnreceitas");
var btncadastrarreceitas = document.getElementById("btnreceitas");

btnPedidos.addEventListener("click", () => {
    const currentUrl = window.location.href;

    if (!currentUrl.includes("gocheff.github.io")) {
        window.location.assign("../pedidos/pedidos.html");
        return;
    }

    window.location.assign("/chef-prototype/views/pedidos/pedidos.html");
})


