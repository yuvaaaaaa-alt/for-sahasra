let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let noCount = 0;

noButton.addEventListener("click", function() {
    noCount++;
    yesButton.style.fontSize = (16 + noCount * 5) + "px";
    noButton.innerText = "Please press Yes! 😢";
});

yesButton.addEventListener("click", function() {
    window.location.href = "pages/yes.html";
});
