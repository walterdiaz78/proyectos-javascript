
let log = console.log;

let dateDom = document.querySelector(".main__date");
let hourDom = document.querySelector(".main__hour");

let mydate =() =>{
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    
    if (day < 10) day = `0${day}`;
    if (month < 10) month = `0${month}`;

    if(hour < 10)  hour = `0${hour}`;
    if(mins < 10) mins = `0${mins}`;
    if(secs < 10) secs = `0${secs}`;
    
    
    dateDom.innerHTML = `${day}/${month}/${year}`;
    hourDom.innerHTML = `${hour}:${mins}:${secs}`;
    

};

mydate();

// para que actualice cada segundo
setInterval(() => {
    mydate();

},1000);
