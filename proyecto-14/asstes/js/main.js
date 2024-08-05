const sueldos = [1050, 640, 750, 1500, 2200, 3011, 432];

let sueldoUsuario = parseInt(prompt(("Cual es tu sueldo?")));

function buscarSueldos(salarios, miSueldo){
    
    let busqueda = salarios.filter(salario => salario >= miSueldo); //devuelve true o folse, true lo mete en array

    let ordenar = busqueda.sort((a,b) => a -b);

    console.log("Hay varios salarios mayores a " +miSueldo+ ", son estos:");

    for(let i in ordenar) console.log(ordenar[i]);

}

buscarSueldos(sueldos, sueldoUsuario);
