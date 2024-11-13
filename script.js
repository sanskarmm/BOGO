document.addEventListener('DOMContentLoaded', () => {
    const offerRadios = document.querySelectorAll('input[name="offer"]');
    const totalPrice = document.getElementById('totalPrice');
    const addToCart = document.getElementById('addToCart');
    const optionsContainers = {
      1: document.getElementById('options1'),
      2: document.getElementById('options2'),
      3: document.getElementById('options3')
    };
  
    function updateTotal() {
      const selectedOffer = document.querySelector('input[name="offer"]:checked');
      const price = selectedOffer ? selectedOffer.getAttribute('data-price') : 0;
      totalPrice.textContent = `$${parseFloat(price).toFixed(2)} USD`;
    }
  
    function toggleOptions(selectedId) {
      Object.keys(optionsContainers).forEach((key) => {
        optionsContainers[key].classList.remove('active');
        if (parseInt(key) === selectedId) {
          optionsContainers[key].classList.add('active');
        }
      });
    }
  
    offerRadios.forEach((radio) => {
      radio.addEventListener('change', (event) => {
        const selectedId = parseInt(event.target.value);
        toggleOptions(selectedId);
        updateTotal();
      });
    });
  
    // Default selection handling
    const defaultOffer = document.querySelector('input[name="offer"]:checked');
    if (defaultOffer) {
      const defaultId = parseInt(defaultOffer.value);
      toggleOptions(defaultId);
      updateTotal();
    }
  
    addToCart.addEventListener('click', () => {
      alert('Added to Cart');
    });
  
  });
  