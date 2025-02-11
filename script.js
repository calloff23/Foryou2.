const heartLines = document.querySelectorAll(".heart-line");
const heartText = document.querySelector(".heart-text");

let colors = ["red", "orange", "yellow", "green", "blue", "violet"];
let i = 0;

// Delay before rainbow effect starts
setTimeout(() => {
    setInterval(() => {
        heartLines.forEach(line => {
            line.style.stroke = colors[i];
        });
        i = (i + 1) % colors.length;
    }, 500);

    // Show the text after the heart is fully formed
    heartText.style.opacity = 1;

}, 5000); // Starts after the heart is fully formed
