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