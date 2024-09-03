
window.addEventListener("load", () => {
    let body = document.querySelector(".principal");
    let btn = document.querySelector(".main__btn");
    let imgClara = document.querySelector(".img__clara");
    let imgOscura = document.querySelector(".img__oscura");

    btn.addEventListener("click", () => {
        body.classList.toggle("oscura");
        btn.classList.toggle("oscura");
       
        if (body.classList.contains("oscura")) {
            imgClara.style.display = "none";   
            imgOscura.style.display = "block"; 
        } else {
            imgClara.style.display = "block";  
            imgOscura.style.display = "none";  
        }

    });


});