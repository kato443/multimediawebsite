document.addEventListener("DOMContentLoaded", function () {
    const box = document.getElementById("animated-box");
    const video = document.querySelector("video");
    const audioSection = document.querySelector("audio");
    const img = document.querySelector(".responsive");


    box.addEventListener("click", function () {
        box.style.backgroundColor = box.style.backgroundColor === "red" ? "blue" : "red";
    });

    // Play/Pause Video
    document.getElementById("toggleVideo").addEventListener("click", function () {
        if (video.paused) {
            video.play();
            this.textContent = "Pause Video";
        } else {
            video.pause();
            this.textContent = "Play Video";
        }
    });

    // Show/Hide Audio Player
    document.getElementById("toggleAudio").addEventListener("click", function () {
        if (audioSection.style.display === "none") {
            audioSection.style.display = "block";
            this.textContent = "Hide Audio";
        } else {
            audioSection.style.display = "none";
            this.textContent = "Show Audio";
        }
    });

    // Image Hover Effect
    img.addEventListener("mouseover", function () {
        img.src = "hover-image.jpg"; // Change to another image
    });
    img.addEventListener("mouseout", function () {
        img.src = "image.jpg"; // Revert to the original image
    });

    // Move Box with Arrow Keys
    document.addEventListener("keydown", function (event) {
        let left = parseInt(window.getComputedStyle(box).getPropertyValue("left")) || 0;
        if (event.key === "ArrowRight") {
            box.style.left = left + 10 + "px";
        } else if (event.key === "ArrowLeft") {
            box.style.left = left - 10 + "px";
        }
    });
});
