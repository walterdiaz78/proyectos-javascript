window.addEventListener("load", () => {

    let stars = document.querySelectorAll(".stars__star");


    //Mi codigo
    // stars.forEach((star, index) => {
    //     star.addEventListener("mouseover", () => {
    //         star.classList.toggle("active")
    // })

    stars.forEach((star, index) => {
        star.addEventListener("mouseover", () => {

            stars.forEach(star => {
                if(star.classList.contains("active")){
                    star.classList.remove("active");
                }
            });

            for(let count = 0; count <= index; count++){

                let starActual = stars[count];

                if(!starActual.classList.contains("active")){
                    starActual.classList.add("active");
                };
            };

            //star.classList.add("active");
        });
    });

});