
// Definir variables seleccionando elementos del DOM
let articles = document.querySelector(".layout__articles");
let title = document.querySelector("#title");
let subtitle = document.querySelector("#subtitle");
let description = document.querySelector("#description");
let form = document.querySelector(".form__create");

let new_articles = JSON.parse(localStorage.getItem("articles")) || []; // Inicializar desde Local Storage o array vacío

function createArticle() {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (title.value && subtitle.value && description.value) {
            let article = {
                title: title.value,
                subtitle: subtitle.value,
                description: description.value
            };
            new_articles.push(article);
            localStorage.setItem("articles", JSON.stringify(new_articles));

            showArticles(); // Mostrar artículos después de guardar uno nuevo
        } else {
            alert("Faltan datos por rellenar en el formulario");
        }
    });
}

function layoutArticle(article) {
    let layout = `
    <article class="layout__card">
        <header class="card__header">
            <p class="header__author">${article.subtitle}</p>
        </header>
        <div class="card__content">
            <h2 class="content__title">${article.title}</h2>
            <p class="content__description">
                ${article.description}
            </p>
            <button class="content__btn">Leer más</button>
        </div>
    </article>
    `;
    return layout;
}

function showArticles() {
    articles.innerHTML = "";
    new_articles = JSON.parse(localStorage.getItem("articles")) || []; // Re-cargar desde Local Storage

    if (new_articles.length > 0) {
        new_articles.reverse(); // Invertir solo si hay artículos

        new_articles.forEach(article => {
            articles.innerHTML += layoutArticle(article);
        });
    }
}

createArticle();
showArticles();

// // Definir variables seleccionando elementos del DOM

// let articles = document.querySelector(".layout__articles");
// let title = document.querySelector("#title");
// let subtitle = document.querySelector("#subtitle");
// let description = document.querySelector("#description");
// let form = document.querySelector(".form__create");

// let new_articles = [];

// function createArticle(){
//     form.addEventListener("submit", (e) => {
//         e.preventDefault();

//         if(title.value && subtitle.value && description.value){
//             let article = {
//                 title: title.value,
//                 subtitle: subtitle.value,
//                 description: description.value

//             };
//             new_articles.push(article);
//             localStorage.setItem("articles", JSON.stringify(new_articles));
            
//             new_articles.reverse();
//             showArticles();
            
//         }else{
//             alert("Faltan datos por rellenar en el formulario");    
//         }
        
//     })
// }



// function layoutArticle(article){
//     let layout = `
//     <article class="layout__card">
//                 <header class="card__header">
//                     <p class="header__author">${article.subtitlr}</p>
//                 </header>
//                     <div class="card__content">
//                         <h2 class="content__title">${article.title}</h2>
//                         <p class="content__description">
//                             ${article.description}
//                         </p>
//                         <button class="content__btn">Leer mas</button>
//                     </div>  
    
//             </article>
//             `;
//             return layout;
// };

// function showArticles(){
//     articles.innerHTML = "";
//     new_articles = JSON.parse(localStorage.getItem("articles"));
//     new_articles.reverse();

//     if(new_articles.length > 0){

//         new_articles.forEach(article => {
//             articles.innerHTML += layoutArticle(article);
//         });
//     }
// };

// createArticle();
// showArticles();