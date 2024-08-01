
  
  
  
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
  
