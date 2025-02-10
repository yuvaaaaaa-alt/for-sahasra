document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");

    let size = 16; // Initial font size

    noButton.addEventListener("click", function () {
        size += 10; // Increase Yes button size
        yesButton.style.fontSize = size + "px"; 
        noButton.innerText = "Please press Yes 😭"; 
    });
});
