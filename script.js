document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");

    let size = 16; // Initial font size in pixels

    noButton.addEventListener("click", function () {
        size += 10; // Increase size
        yesButton.style.fontSize = size + "px"; // Apply new size
        noButton.innerText = "Please press Yes 😭"; // Change text
    });
});
