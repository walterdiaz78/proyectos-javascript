// Esto hace que primero carge el DOM y luego ejecute el js - 
// otra opcion es ponerlo antes del cierre del body,
// otra opcion es ponerlo en el head y agregar defer


// window.addEventListener("DOMContentLoaded", event => {

//     alert("En lugar de alert iria todo el codigo a ejecutar")
// });

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

let num = 0;
let result = false;

do {
    num = parseInt(prompt("Introduce un numero, para ver si es par", 0));
} while (num<= 0);

function isPair(x){
    if(x %2 == 0) {
        return true;
    }else {
        return false;
    }
}

result = isPair(num);

let resultBox = document.querySelector("#result");
let message = "El numero " +num+ " es impar";

if(result == true){ 
    message = "El numero " +num+ " es par";
}   
console.log(message);
alert(message);
resultBox.innerHTML = `<h1> ${message} </h1>`;
 

 
// Asi funciona

// let num = 0;
// let result = false;

// do {
//     num = parseInt(prompt("Introduce un numero, para ver si es par", 0));
// } while (num<= 0);

// function isPair(x){
//     if(x %2 == 0) {
//         return true;
//     }else {
//         return false;
//     }
// }

// result = isPair(num);

// let resultBox = document.querySelector("#result")

// if(result == true){ 
//     let success = "El numero " +num+ " es par";
//     console.log(success);
//     alert(success);
//     resultBox.innerHTML = `
//     <h1> ${success} </h1>`;
    

// }else{
//     let failed = "El numero " +num+ "es impar";
//     console.log(failed);
//     alert(failed);
//     resultBox.innerHTML = `
//     <h1> ${failed} </h1>`; 