function nextPage() {
    window.location.href = "yes.html";
}

function moveButton() {
    var x = Math.random() * (window.innerWidth - document.getElementById('noButton').offsetWidth);
    var y = Math.random() * (window.innerHeight - document.getElementById('noButton').offsetHeight);
    document.getElementById('noButton').style.left = `${x}px`;
    document.getElementById('noButton').style.top = `${y}px`;
}

console.log("Made with love by - Urvish Patel ❣️");


// function askName() {
//     var userName;

//     // Keep prompting until a valid name is provided
//     while (!userName) {
//         userName = prompt("What is your name?");
//     }

//     // Store the user's name in localStorage for later use
//     localStorage.setItem('userName', userName);
// }

// for space 
function askName() {
    var userName;

    // Keep prompting until a valid name is provided
    while (!userName || /\s/.test(userName)) {
        userName = prompt("What is your name? Please enter a name without spaces.");
    }

    // Store the user's name in localStorage for later use
    localStorage.setItem('userName', userName);
}
