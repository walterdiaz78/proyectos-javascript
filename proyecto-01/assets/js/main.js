// alert("Hola mundo!")    --- esta conectado el js?

let nombre = "Walter";
let apellidos = "Diaz";
let edad = 46;
let pais = "Argentina";
let conocimientos = ["Html", "Css", "Javascript", "Bootstrap"]

console.log (`Hola soy ${nombre} ${apellidos}, tengo ${edad} años, vivo en ${pais}
    y tengo los siguientes conocimientos: ${conocimientos}`)

edad = 47;
conocimientos.push("React");

console.log (`Ahora tengo ${edad} años y he aprendido ${conocimientos[4]}`)