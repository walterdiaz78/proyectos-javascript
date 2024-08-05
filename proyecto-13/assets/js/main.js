
let lista = [2,4,6,8,10,12,14,16,18,];

// function sumaArray(numeros) {
//     let suma = 0;   

//     for (let i = 0; i < numeros.length; i++ ){
//         suma += numeros[i];
//     }
//     return suma;
// }
// console.log(sumaArray(lista));

// calcular el producto de todos los elementos en el array 

// function producto(numeros){
//     let producto2 = 1;
//     for (let i = 0; i< numeros.length; i++){
//         producto2 *= numeros[i];
//     }
//     return producto2;
// }

// console.log(producto(lista))

// Crea una función flecha que cuente cuántas vocales hay en una cadena.

let palabra = "murcielago";

function contarVocales(word){
    let vocales = "AaEeIiOoUu";
    let contador = 0;

    for (let i = 0; i < word.length; i++){
        if (vocales.includes(word[i])) {
            contador++;
        }
    }
    return contador;
}

console.log(contarVocales("pedorreta de murcielagoMi nombre es walter y soy programador web"));