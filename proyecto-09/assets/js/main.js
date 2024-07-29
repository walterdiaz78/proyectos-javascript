let result = 0;

// ... es para agregar multiples parametros
function sumAll(...numbers){
    
    let resultBox = document.querySelector("#result");
    let numbersBox = document.querySelector("#numbers");

    numbersBox.innerHTML = "los numeros utilizados son: "; 

    for(let count = 0; count < numbers.length; count++){
        
        result += numbers[count];

        numbersBox.innerHTML += numbers[count];

        if(count !== numbers.length -1) numbersBox.innerHTML += ", "
    }

    resultBox.innerHTML = "El resultado es: "+ result;
    



}

sumAll(3,4,9,3,1)
