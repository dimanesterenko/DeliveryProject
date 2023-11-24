function trackParcel() {
    var orderIdInput = document.getElementById("orderIdInput");
    var orderId = orderIdInput.value;

    //Two letters followed by eight numbers
    var orderIdPattern = /^[A-Za-z]{2}\d{8}$/;

    if (!orderIdPattern.test(orderId)) {
        alert("Invalid input format. Please enter two letters followed by eight numbers (e.g., AB12345678).");
        orderIdInput.value = "";
      
        return;
    }

    // If the input is valid, construct the URL and redirect
    var url = "tracker2.html?orderId=" + orderId;
    window.location.href = url;
}

function randomlySelectStatusAndTime() {
    var statuses = document.querySelectorAll(".statuses");
    var times = document.querySelectorAll(".delivery-time-item");

    var randomStatusIndex = Math.floor(Math.random() * statuses.length);
    var randomTimeIndex = Math.floor(Math.random() * times.length);

    statuses[randomStatusIndex].classList.add("active");
    times[randomTimeIndex].classList.add("active");
}

window.onload = function () {
  randomlySelectStatusAndTime();
};