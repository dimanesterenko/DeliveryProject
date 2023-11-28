function saveOrder() {
    const productDescription = document.getElementById('descr').value;
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    const nameOnCard = document.getElementById('cc-name').value;
    const creditCardNumber = document.getElementById('cc-number').value;
    const expirationDate = document.getElementById('cc-expiration').value;
    const cvv = document.getElementById('cc-cvv').value;

    const orderData = {
        description: productDescription,
        paymentMethod: paymentMethod,
        nameOnCard: nameOnCard,
        creditCardNumber: creditCardNumber,
        expirationDate: expirationDate,
        cvv: cvv
    };

const jsonString = JSON.stringify(orderData);
console.log(jsonString);
var firstBlock = document.querySelector('.firstblock');
var secondBlock = document.querySelector('.secondblock');
    if (firstBlock) {
        firstBlock.style.display = 'none';
        secondBlock.style.display='block';
    }
}

