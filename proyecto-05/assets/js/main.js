
let tableContainer = document.querySelector(".tables")

let result = 0;

// Bucle para sacar el numero de la tabla
for(let i = 1; i <= 10; i++){

    // plantilla para mostrar encabezado 
    //y crear caja para las operaciones de la tabla
    tableContainer.innerHTML += `
        <div class="tables__item">
            <h2 class="tables__title">
                Tabla del ${i}
            </h2>

            <ul class="tables__list tables__list--${i}">
            </ul>
            </div>
    `;
    //Bucle para sacar numeros de las operaciones de la tabla
    for(let n= 1; n <=10; n++){

        // Calcular resultado de la operacion

        result = i*n;

        //para sacar caja donde mostrar operaciones
        let list = document.querySelector(".tables__list--" +i);

        // Agregar operaciones
        list.innerHTML += `<li class="list__item">${i + " x " + n + " = " +result}</li>`;
                  

    }
}