function assignRandomOpacity() {
  var deliveryStatusRows = document.querySelectorAll('.delivery-status .row');
  var randomIndex = Math.floor(Math.random() * deliveryStatusRows.length);

  if (randomIndex >= 0 && randomIndex < deliveryStatusRows.length) {
    deliveryStatusRows[randomIndex].classList.add('active');
  }

  var deliveryTimeItems = document.querySelectorAll('.delivery-time-item');
  randomIndex = Math.floor(Math.random() * deliveryTimeItems.length);

  if (randomIndex >= 0 && randomIndex < deliveryTimeItems.length) {
    deliveryTimeItems[randomIndex].classList.add('active');
  }
}

function trackParcel() {
  console.log('Entering trackParcel function');
  const orderId = document.getElementById('orderIdInput').value;

  if (orderId) {
    assignRandomOpacity(); 
      
    setTimeout(() => {
      window.location.href = 'tracker2.html?orderId=' + orderId;
    }, 0);
  }
}
