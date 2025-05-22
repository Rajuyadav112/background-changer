let button = document.getElementById("colorBtn");

button.addEventListener("click", function() {
    let colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});