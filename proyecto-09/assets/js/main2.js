// Variables y tipos de datos:
// Enunciado: Crea variables para almacenar tu nombre, edad, y si te gusta programar 
// (usando un booleano). Luego, muestra estos datos en la consola.


let nombre = "Walter";
let edad = 46;
let programar = true;

let texto = "Mi nombre es " + nombre + ", tengo " + edad + " años";

if (programar) {
  texto += " y me gusta programar";
} else {
  texto += " y no me gusta programar";
}

let box1 = document.getElementById("box");
box1.innerHTML = texto;

console.log(texto);

