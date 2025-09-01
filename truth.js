const starfield = document.getElementById("starfield");

function createStars(count) {
  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");
    star.className = "background-star";
    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.top = Math.random() * window.innerHeight + "px";
    star.style.animationDelay = `${Math.random() * 5}s`;
    starfield.appendChild(star);
  }
}

createStars(80);
