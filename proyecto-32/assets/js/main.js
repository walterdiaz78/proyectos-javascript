window.addEventListener("load", () => {

    let btnPrev = document.querySelector(".main__prev");
    let btnNext = document.querySelector(".main__next");
    let slides = document.querySelectorAll(".slides__item");

    let count = 0;

    btnNext.addEventListener("click", () => {
        
        count++;

        if(count>slides.length - 1){
            count = 0;
        }

        show();
    });

    btnPrev.addEventListener("click", () => {
        
        count--;

        if(count < 0){
            count = slides.length - 1;
        }

        show();
    });


    let show = () => {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${100 * (i - count)}%)`;
        });
    };
    show();

});