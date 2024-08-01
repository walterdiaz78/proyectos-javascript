let text = prompt("Introduce una palabra");


function countAndUpperLetters(word){
    let upper = word.toUpperCase();
    let counter = word.length;

    return "La palabra " +upper+ " y tiene "+counter+ " letras"; 
}

 alert(countAndUpperLetters(text));