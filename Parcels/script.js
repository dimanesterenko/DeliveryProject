const blocks = document.querySelectorAll('.block1');

blocks.forEach((block) => {
  const elements = block.querySelectorAll('.picture, .name, .price');

  elements.forEach((element) => {
    element.addEventListener('mouseover', () => {
      block.classList.add('highlighted');
    });

    element.addEventListener('mouseleave', () => {
      block.classList.remove('highlighted');
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
    var cardsContainer = document.querySelectorAll(".block1");

    cardsContainer.forEach(function (card) {
        card.addEventListener("click", function (event) {
            window.location.href = "/order/order.html";
        });
    });
});
