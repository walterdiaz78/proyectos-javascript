
  
  pantalla victor   1536x747
  porque mi pantalla no se ve en 1536x747 estoy en fedora la resoluccion maxima que me permite es 1366x768 mi notebok es uns dell latitude E6530 esta actualizado fedora
  
<body>
    <span class="price" data-usd="9" data-ars="90.000">100 USD</span><br>
    <span class="price" data-usd="120" data-ars="120.000">130 USD</span><br>
    <span class="price" data-usd="160" data-ars="160.000">170 USD</span>

    <script src="./api-geo.js"></script>
</body>

<h2 class="price" data-usd="100" data-ars="90.000">$90.000</h2>
<h2 class="price" data-usd="130" data-ars="120.000">$120.000</h2>
<h2 class="price" data-usd="170" data-ars="160.000">$160.000</h2>



fetch('https://ipapi.co/json/')
  .then(response => response.json())
  .then(data => {
    const isArgentina = data.country_code === 'AR';
    const priceElements = document.querySelectorAll('.price');
    
    priceElements.forEach(element => {
      if (isArgentina) {
        const arsPrice = element.dataset.ars;
        element.textContent = `${arsPrice} ARS`;
      } else {
        const usdPrice = element.dataset.usd;
        element.textContent = `${usdPrice} USD`;
      }
    });
  })
  .catch(error => console.error('Error:', error));
  
  
  html{
    font-size: 10px;
}

body{
    font-family: Montserrat;
    font-size: 1.6rem;
    background-color: #E8EFFA;
    padding: 3rem;
}

.layout{
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 2rem;
}

.layout__card{
    width: 30rem;
    background-color: #0D6EFD;
    color: white;
    border-radius: 0.5rem;
    overflow: hidden;
    text-align: center;
}

.card__header{
    border-bottom: 1px solid #0b58ca;
}

.header__author{
    font-size: 1.4rem;
    font-weight: 500;
    color: white;
    padding: 1rem 1.5rem;
}

.card__content{
    padding: 1.5rem;
}

.content__title{
    font-size: 1.8rem;
    margin-bottom: 1rem;
}

.content__description{
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
    margin-bottom: 1rem;
}

.content__btn{
    border: 1px solid #0b58ca;
    background-color: transparent;
    width: 100%;
    padding: 1rem;
    outline: none;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
    margin-bottom: 1rem;
}
