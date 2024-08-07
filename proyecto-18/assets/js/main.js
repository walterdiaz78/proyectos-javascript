//Variables para contadores de minutos y segundos
let cronoMin = document.querySelector(".crono__min");
let cronoSec = document.querySelector(".crono__sec");

//Variables seleccion botones
let btnStart = document.querySelector(".layout__btn-start");
let btnStop = document.querySelector(".layout__btn-stop");

//variables cuenta minutos y segundos
let minutes = 0;
let seconds = 0;
let time = null;

// funcion para iniciar cronometro (setInterval cada cierto tirmpo hace una operacion / 1000  (ms =1seg));)

let start = () => {
  if (!time) {
    time = setInterval(() => {
      seconds++;

      if (seconds == 60) {
        minutes++;
        seconds = 0;
      }

      if (minutes >= 60) {
        alert("Has excedido el tiempo limite de 60 minutos");
        clearInterval(time);
      }

      if(seconds<10){
        cronoSec.innerHTML = "0" + seconds;
      }else{
          cronoSec.innerHTML = seconds;
          
      }

      if(minutes<10){
        cronoMin.innerHTML = "0" + minutes;
      }else{

          cronoMin.innerHTML = minutes;
      }
      

    }, 1000);
  }
};

//Boton iniciar
btnStart.addEventListener("click", () => {
  start();
});

btnStop.addEventListener("click", () =>{
    if(time){
        clearInterval(time);
        time = null;
    }
});