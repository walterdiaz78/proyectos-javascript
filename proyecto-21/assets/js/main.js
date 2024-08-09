window.addEventListener("DOMContentLoaded", (e) => {
  //Seleccionar elementos del dom

  let inventarioDom = document.querySelector(".main__inventario");
  let cajas = document.querySelectorAll(".inventario__caja");
  let estanteriaDom = document.querySelectorAll(".almacen__estanteria");

  console.log(inventarioDom, cajas, estanteriaDom);

  //poner un id unico a caja movible
  cajas.forEach((caja, i) => {
    caja.setAttribute("id", "caja" + i);

    caja.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("id", e.target.id);
    });
  });

  // Establecer cada hueco de la estanteria como un hueco donde puedo soltar un elemento

  estanteriaDom.forEach((estanteria, i) => {
    estanteria.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    estanteria.addEventListener("drop", function (e) {
      e.preventDefault();

      let cajaId = e.dataTransfer.getData("id");

      if (cajaId && cajaId != "") {
        let caja = document.querySelector("#" + cajaId);

        if (this.lastChild == null) {
          e.target.appendChild(caja);
          this.style.boxShadow = "none";
        } else {
          alert("Esta estanteria esta ocupada");
        }

        estanteriaDom.forEach((estanteria) => {
          if (estanteria.lastChild == null) {
            estanteria.style.boxShadow = "0px 0px 8px black inset";
          }
        });

        if (inventarioDom.innerHTML.trim() == "") {
          alert("Todas las cajas han sido guardadas!! ");

          console.log(inventarioDom.innerHTML.trim());
        }

      }
    });
  });
});
