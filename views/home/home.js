var btnPedidos = document.getElementById("btnpedidos");
var btnVerificarPedidos = document.getElementById("btnverificarpedidos");
var btnReceitas = document.getElementById("btnreceitas");
var btncadastrarreceitas = document.getElementById("btncadastrarreceitas");

btnPedidos.addEventListener("click", () => {
    const currentUrl = window.location.href;

    if (!currentUrl.includes("gocheff.github.io")) {
        window.location.assign("../pedidos/pedidos.html");
        return;
    }

    window.location.assign("/chef-prototype/views/pedidos/pedidos.html");
})

btnVerificarPedidos.addEventListener("click", () => {
    const currentUrl = window.location.href;

    if (!currentUrl.includes("gocheff.github.io")) {
        window.location.assign("../verificarPedidos/verificarPedidos.html");
        return;
    }

    window.location.assign("/chef-prototype/views/verificarPedidos/verificarPedidos.html");
})

btnReceitas.addEventListener("click", () => {
    const currentUrl = window.location.href;

    if (!currentUrl.includes("gocheff.github.io")) {
        window.location.assign("../receitas/receitas.html");
        return;
    }

    window.location.assign("/chef-prototype/views/receitas/receitas.html");
})

btncadastrarreceitas.addEventListener("click", () => {
    const currentUrl = window.location.href;

    if (!currentUrl.includes("gocheff.github.io")) {
        window.location.assign("../addReceita/adicionarReceita.html");
        return;
    }

    window.location.assign("/chef-prototype/views/addReceita/adicionarReceita.html");
})


