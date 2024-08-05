
let animales = ["perro", "gato", "leon", "tigre", "mapache", "delfin"];

const recorrerMostrar = () => {
    document.write("<h1> Proyecto 12 Js - Walter Diaz </h1>");

    // for (let i = 0; i < animales.length; i++) {
    //     let parrafo = `<p>Esta enimal es ${animales[i]}</p>`;
        
    //     document.write(parrafo)
    // }

    // Mas visible y facil queda asi 

    animales.forEach((animal) => {
        let parrafo = `<p>Esta animal es ${animal}</p>`;
        document.write(parrafo)
    })
    
}
recorrerMostrar();

