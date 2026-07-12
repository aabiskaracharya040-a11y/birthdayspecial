// ===================================
// Happy Birthday Website for Aarohi ❤️
// Part 3A
// ===================================

// Sections
const hero = document.querySelector(".hero");
const mainContent = document.getElementById("mainContent");
const letterSection = document.getElementById("letterSection");
const roseSection = document.getElementById("roseSection");
const cakeSection = document.getElementById("cakeSection");
const finalSection = document.getElementById("finalSection");

// Buttons
const openBtn = document.getElementById("openBtn");
const nextBtn = document.getElementById("nextBtn");
const cakeBtn = document.getElementById("cakeBtn");
const celebrateBtn = document.getElementById("celebrateBtn");
const musicBtn = document.getElementById("musicBtn");

// Audio
const song = document.getElementById("song");

// Typing Element
const typing = document.getElementById("typing");

// ===================================
// Typing Text
// ===================================

const message = `Happy Birthday, Aarohi ❤️

Today is all about celebrating the wonderful person you are.

May your smile always stay bright,
your dreams come true,
and your heart always be filled with happiness.

Thank you for bringing so much joy into my life.

With all my love,

Aabiskar ❤️`;

let index = 0;

function typeWriter() {

    if (index < message.length) {

        typing.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter, 40);

    }

}

// ===================================
// Navigation Fix
// ===================================

openBtn.addEventListener("click", () => {
    console.log("button clicked!");

    hero.classList.add("hidden");            // Use class lists instead of style.display
    mainContent.classList.remove("hidden"); // Correctly remove hidden class
    
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    typeWriter();
});

// Update the automatic timer block so it checks visibility correctly:
setTimeout(() => {
    if (!mainContent.classList.contains("hidden")) {
        letterSection.classList.remove("hidden");
    }
}, 14000);

nextBtn.addEventListener("click", () => {
    // Hide BOTH the main text block and the letter section cleanly
    mainContent.classList.add("hidden");
    letterSection.classList.add("hidden");

    roseSection.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

cakeBtn.addEventListener("click", () => {
    roseSection.classList.add("hidden");
    cakeSection.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

celebrateBtn.addEventListener("click", () => {
    cakeSection.classList.add("hidden");
    finalSection.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// ===================================
// Automatically show the letter
// after typing finishes
// ===================================

setTimeout(() => {

    if (!mainContent.classList.contains("hidden")) {

        letterSection.classList.remove("hidden");

    }

}, 14000);

// ===================================
// Music Button
// ===================================

musicBtn.addEventListener("click", () => {

    if (song.paused) {

        song.play();

        musicBtn.innerHTML = "⏸ Pause Music";

    } else {

        song.pause();

        musicBtn.innerHTML = "🎵 Play Our Song";

    }

});
// ===================================
// Part 3B
// Floating Hearts, Balloons & Sparkles
// ===================================

// Containers
const heartsContainer = document.getElementById("hearts");
const balloonsContainer = document.getElementById("balloons");
const sparklesContainer = document.getElementById("sparkles");

// -------------------------------
// Floating Hearts
// -------------------------------

const heartEmojis = [
    "❤️",
    "💖",
    "💕",
    "💗",
    "💓",
    "💞"
];

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML =
        heartEmojis[
            Math.floor(Math.random()*heartEmojis.length)
        ];

    heart.style.left = Math.random()*100 + "%";

    heart.style.fontSize =
        (20 + Math.random()*25) + "px";

    heart.style.animationDuration =
        (8 + Math.random()*6) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },15000);

}

setInterval(createHeart,500);

// -------------------------------
// Floating Balloons
// -------------------------------

const balloonColors = [
    "🎈",
    "🎈",
    "🎈"
];

function createBalloon(){

    const balloon =
        document.createElement("div");

    balloon.className="balloon";

    balloon.innerHTML =
        balloonColors[
            Math.floor(Math.random()*balloonColors.length)
        ];

    balloon.style.left =
        Math.random()*100 + "%";

    balloon.style.animationDuration =
        (10 + Math.random()*6) + "s";

    balloonsContainer.appendChild(balloon);

    setTimeout(()=>{
        balloon.remove();
    },17000);

}

setInterval(createBalloon,1800);

// -------------------------------
// Sparkles
// -------------------------------

function createSparkle(){

    const sparkle =
        document.createElement("div");

    sparkle.className="sparkle";

    sparkle.style.left =
        Math.random()*100 + "%";

    sparkle.style.top =
        Math.random()*100 + "%";

    sparkle.style.animationDuration =
        (1 + Math.random()*2) + "s";

    sparklesContainer.appendChild(sparkle);

    setTimeout(()=>{
        sparkle.remove();
    },3000);

}

setInterval(createSparkle,180);

// -------------------------------
// Small greeting in console ❤️
// -------------------------------

console.log(
"Happy Birthday Aarohi ❤️\nMade with love by Aabiskar."
);
setTimeout(() => {
    if (!mainContent.classList.contains("hidden")) {
        letterSection.classList.remove("hidden");
    }
}, 14000);
