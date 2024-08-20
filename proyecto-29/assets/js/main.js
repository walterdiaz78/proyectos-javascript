
window.addEventListener("load", () => {

    let controls = document.querySelectorAll(".form__control");

    controls.forEach(formcontrol => {

        let label = formcontrol.firstElementChild;
        let input = formcontrol.lastElementChild;

        input.addEventListener("focus", () => {
            label.classList.remove("blur");
            label.classList.add("focus");
        });
        

        input.addEventListener("blur", () => {
            if(input.value.trim() == ""){
                label.classList.remove("focus");
                label.classList.add("blur");
            };

        });
    });

});
