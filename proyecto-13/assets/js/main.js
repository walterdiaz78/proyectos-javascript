
let concesionario = [
    {
        marca: "Mercedes",
        modelos: ["clase A", "clase B", "clase C"]
    },

    {
        marca: "Audi",
        modelos: ["A4", "A5", "A8"]
    },

    {
        marca: "Renault",
        modelos: ["Clio", "Capture", "Megane"]
    },
];

function mostrar (datos) {

    let cajaConcesionario = document.querySelector("#concesionario");

    datos.forEach(coches => {
        cajaConcesionario.innerHTML += `<h1>${coches.marca}`;

        cajaConcesionario.innerHTML += `<ul>`;
        coches.modelos.forEach(modelo => {
            cajaConcesionario.innerHTML += `<li>${modelo}</li>`;
        });


        cajaConcesionario.innerHTML += `</ul>`;
        
        
    });
}

mostrar(concesionario);