window.addEventListener('DOMContentLoaded', () => {
    const mediaQuery = window.matchMedia('(max-width: 780px)');
    const trackParcel = document.querySelector('.d-flex .nav-link');
    const textContainer = document.querySelector('.text');

    function handleMediaChange(e) {
        if (e.matches) {
            // Якщо умова медіа-запиту виконується, перемістити елемент в .text
            textContainer.appendChild(trackParcel);
        } else {
            // Якщо умова медіа-запиту не виконується, повернути елемент на місце
            document.querySelector('.d-flex').appendChild(trackParcel);
        }
    }

    // Додати прослуховувач подій для медіа-запиту
    handleMediaChange(mediaQuery);
    mediaQuery.addEventListener('change', handleMediaChange);
});
