let sueldo = parseInt(prompt("Cuanto cobras?"));
let resultado = document.getElementById("resultado")

switch (sueldo) {
    case 500:
        resultado.innerHTML = "Trabajas a media jornada";
        
        break;

    case 1000:
        resultado.innerHTML = "Tienes el salario minimo";
            
            break;

    case 1700:
        resultado.innerHTML = "Tienes un sueldo bueno";
        
        break;

    case 2500:
        resultado.innerHTML = "Tienes un sueldo extraordinario";
        
        break;

    default:
        resultado.innerHTML = "Eres un estudiante";
        break;
}