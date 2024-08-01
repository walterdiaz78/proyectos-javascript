let frase = "Este curso tiene muchos proyectos";

let palabra = prompt(`En esta frase "${frase}" Que palabra querrias reemplazar?`)
let reemplazo = prompt(`Has elegido reemplaza la palabra "${palabra}" por que palabra la quieres sustituir?`);

function reemplazar(palabraOriginal, palabraReemplazo){
    
    let busqueda = frase.search(palabraOriginal);
    let fraseFinal = frase;

    if(busqueda && busqueda != -1){
        fraseFinal = frase.replace(palabraOriginal, palabraReemplazo);

    }else{
        fraseFinal = "esa palabra no existe";
    }
    return fraseFinal;
}

alert(reemplazar(palabra , reemplazo));

