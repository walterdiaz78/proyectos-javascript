
const actualYear = new Date().getFullYear();

let year = 1990;

let result = 0;

do {
    year = parseInt(prompt("¿En que año naciste?", year));
    
}while (year < (actualYear - 150) || year > actualYear);



result = actualYear - year;

alert("Tienes " +result, "Años");



// Practica.


// const añoActual = new Date().getFullYear();

// let nacimiento = 1990;

// let edad = 0;

// do {
//     nacimiento = parseInt(prompt("En que año naciste?", nacimiento));
    
// } while (nacimiento < 1910 || nacimiento > añoActual);


// edad = añoActual - nacimiento;

// alert("Tienes "+ edad + "años de edad")