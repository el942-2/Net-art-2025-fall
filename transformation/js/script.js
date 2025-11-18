let transformed = false;

document.body.addEventListener("click", () => {
    transformed = !transformed;

    // Toggle identity class on body
    document.body.classList.toggle("chaos", transformed);

    // Change text
    const title = document.getElementById("title");
    title.textContent = transformed 
        ? "CHAOS MODE ACTIVATED" 
        : "Click to transform";

    // Add floating shapes only when in chaos mode
    if (transformed) {
        addCircles(15);
    } else {
        removeCircles();
    }
});

// Creates random floating shapes
function addCircles(num) {
    for (let i = 0; i < num; i++) {
        const c = document.createElement("div");
        c.classList.add("circle");

        c.style.left = Math.random() * window.innerWidth + "px";
        c.style.top  = Math.random() * window.innerHeight + "px";

        document.body.appendChild(c);
    }
}

function removeCircles() {
    document.querySelectorAll(".circle").forEach(c => c.remove());
}
