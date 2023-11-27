document.addEventListener("DOMContentLoaded", function () {
    var cardsContainer = document.querySelectorAll(".card");

    cardsContainer.forEach(function (card) {
        card.addEventListener("click", function (event) {
            window.location.href = "/order/order.html";
        });
    });
});
