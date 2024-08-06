
window.addEventListener("DOMContentLoaded", () => {

    console.log(screen.width, screen.height, window.location.href);
    
    let data = document.querySelector("#data");

    data.innerHTML +=  "<h2>Ancho: "+ window.innerWidth +" Pixeles </h2>";
    data.innerHTML += "<h2>Altura: "+ window.innerHeight +" Pixeles </h2>";    
    data.innerHTML += "<h2>URL: "+ window.location.href +" Pixeles </h2>";
});