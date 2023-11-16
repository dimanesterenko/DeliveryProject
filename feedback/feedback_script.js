document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('thanksModal');
    var button = document.getElementById('thanksButton');
    var close = document.getElementsByClassName('close')[0];
    var textarea = document.getElementById('feedtext');

    button.addEventListener('click', function () {
        if (textarea.value.trim() !== "") {
        modal.style.display = 'block';
        setTimeout(function () {
            modal.style.display = 'none';
        }, 5000);}
    });

    close.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
