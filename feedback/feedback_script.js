var modal = document.getElementById('thanksModal');

document.addEventListener('DOMContentLoaded', function () {
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


function addFeedback() {
    var name = document.getElementById('name').value;
    var feedback = document.getElementById('feedtext').value;
    if (name.trim() === '' || feedback.trim() === '') {
        //alert('Please fill in both Name and Feedback fields.');
        return;
    }
    modal.style.display = 'block';
            setTimeout(function () {
                modal.style.display = 'none';
            }, 5000);

    var newBox = document.createElement('div');
    newBox.className = 'box';

    newBox.innerHTML = '<h2>' + name + '</h2><p>' + feedback + '</p>';

    document.getElementById('feedbackContainer').appendChild(newBox);

    document.getElementById('name').value = '';
    document.getElementById('feedtext').value = '';
}