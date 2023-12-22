function nextPage() {
    window.location.href = "yes.html";
}

function moveButton() {
    var button = document.getElementById('noButton');
    var x = Math.random() * (window.innerWidth - button.offsetWidth);
    var y = Math.random() * (window.innerHeight - button.offsetHeight);

    // Ensure the button stays within the viewport boundaries
    x = Math.max(0, Math.min(x, window.innerWidth - button.offsetWidth));
    y = Math.max(0, Math.min(y, window.innerHeight - button.offsetHeight));

    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

console.log("Made with love by - Urvish Patel ❣️");