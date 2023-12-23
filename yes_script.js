console.log("Made with love by - Urvish Patel ❣️");


// Function to display the user's name on the second page
function displayUserName() {
    // Retrieve the user's name from localStorage
    var userName = localStorage.getItem('userName');

    // Display the user's name in the h1 tag
    if (userName) {
        document.getElementById('userNameDisplay').innerText = "YAYYYEEEEE!!!!!!!!!!! Let's go , " + userName + "!";
    } else {
        // Handle the case where the user's name is not available
        document.getElementById('userNameDisplay').innerText = "YAYYYEEEEE!!!!!!!!!!! ";
    }
}
