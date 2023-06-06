var btnBuscar = document.getElementById("btnbuscar");
var btnRegistro = document.getElementById("btnregistro");

btnBuscar.addEventListener("click", () => {
    const currentUrl = window.location.href;

    if (!currentUrl.includes("gocheff.github.io")) {
        window.location.assign("views/home/home.html");
        return;
    }

    window.location.assign("/chef-prototype/views/home/home.html");
})

btnRegistro.addEventListener("click", () => {
    const currentUrl = window.location.href;

    if (!currentUrl.includes("gocheff.github.io")) {
        window.location.assign("views/registro/registro.html");
        return;
    }

    window.location.assign("/chef-prototype/views/registro/registro.html");
})