// Asi con , y tab defino variables sin poner let y al fializar debo poner ;
let marca = "audi",
    velocidad = 200,
    stock = true,
    modelos = ["R8", "A3", "A7"];

let frase = `<p>Tenemos coches de la marca ${marca}, 
van a una velocidad maxima de ${velocidad}K/h</p>
<p>Dispones de estos modelos en stock ${stock}:</p>
`;

modelos.forEach(modelo => {
    frase += `- ${modelo} <br/>`;
})

let caja = document.querySelector("#caja");
caja.innerHTML = frase;