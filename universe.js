const starfield = document.getElementById("starfield");
const universe = document.getElementById("universe");
const letterBox = document.getElementById("letterBox");
const continueBtn = document.getElementById("continueBtn");

const letters = [
  "I love you so much, and I am so happy we met, please be by my side forever.",
  "I know I annoy you sometimes but I promise that I just want to be free when Im near you and not be afraid of being judged.",
  "You will forever be my other half, there's nobody else in this world that understands me the way you do, and ill never sacrifice that.",
  "Even though we both have a lot of flaws and errors, I still think we are perfect for each other.",
  "I want to study everything with you, let's teach each other everything.",
  "Your eyes are so beautiful my love, I want to stare at them forever..",
  "Just our love won't be enough for us to last, I want us to have more in every other aspect.",
  "Even when we sit in silence during our calls, I dont feel that awkward tension between us because I enjoy doing my own things with you there.",
  "I love hearing your voice, it's the most calming sound in the world to me.",
  "I want to be your best friend, your lover, your family, your everything.",
];

let placedCount = 0;

// Create ambient stars
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

createStars(80); // Adjust for density

// Define the secret zone (top-middle area)
const secretZone = {
  x: window.innerWidth / 2 - 100,
  y: 0,
  width: 200,
  height: window.innerHeight * 0.2
};

// Handle star placement and letter display
universe.addEventListener("click", (e) => {
  const star = document.createElement("div");
  star.className = "star";
  star.style.left = `${e.pageX}px`;
  star.style.top = `${e.pageY}px`;
  universe.appendChild(star);

  placedCount++;

  let letter;

  // Every 5th click: show special golden hint
  if (placedCount % 5 === 0) {
    letter = `<span style="color:#ffd700; font-weight:bold;">Aim a bit higher try to find the button!</span>`;
  } else {
    letter = letters[Math.floor(Math.random() * letters.length)];
  }

  // Show the letter
  letterBox.innerHTML = letter;
  letterBox.style.opacity = "1";
  letterBox.style.display = "block";

  // Fade out after 6 seconds
  setTimeout(() => {
    letterBox.style.opacity = "0";
  }, 6000);

  // Check if clicked inside the top-middle zone
  if (
    e.pageX > secretZone.x &&
    e.pageX < secretZone.x + secretZone.width &&
    e.pageY > secretZone.y &&
    e.pageY < secretZone.y + secretZone.height
  ) {
    continueBtn.style.display = "block";
  }
});

// Page transition
function transitionTo(url) {
  document.body.classList.add("fade-out");
  setTimeout(() => {
    window.location.href = url;
  }, 1000);
}
