document.addEventListener("DOMContentLoaded", () => {
    const boomImage = document.getElementById("boom-image");
    const animationContainer = document.getElementById("animation-container");
    const mainContent = document.getElementById("main-content");

    // Create particles
    for (let i = 0; i < 300; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");
        particle.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`; // Vibrant colors
        particle.style.left = "50%";
        particle.style.top = "50%";
        particle.style.setProperty("--dx", Math.random() * 2 - 1); // Random direction X
        particle.style.setProperty("--dy", Math.random() * 2 - 1); // Random direction Y
        animationContainer.appendChild(particle);

        // Remove particles after animation
        particle.addEventListener("animationend", () => {
            particle.remove();
        });
    }

    // Create explosion wave
    const wave = document.createElement("div");
    wave.classList.add("explosion-wave");
    animationContainer.appendChild(wave);

    // Flash background
    const flash = document.getElementById("flash");
    flash.classList.remove("hidden");

    // Remove flash after animation
    flash.addEventListener("animationend", () => {
        flash.classList.add("hidden");
    });

    // Show and scale BOOM image
    setTimeout(() => {
        boomImage.style.opacity = "1";
        boomImage.style.transform = "translate(-50%, -50%) scale(1.5)";
    }, 200);

    // Hide animation container and show main content
    setTimeout(() => {
        animationContainer.classList.add("hidden");
        mainContent.classList.remove("hidden");
    }, 3000);
});
