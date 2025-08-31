// ==============================
// Part 2: Functions — Scope, Parameters & Return Values
// ==============================

// Global variable
let animationCounter = 0;

// Function 1: Toggles box animation
function toggleBoxAnimation(boxElement) {
  boxElement.classList.toggle("active");
  animationCounter++;
  return "Box animation triggered. Total animations: " + animationCounter;
}

// Function 2: Flips a card (reusable for any card element)
function flipCard(cardElement) {
  cardElement.classList.toggle("flipped");
  return "Card flip executed.";
}

// Demonstrating scope
function localScopeDemo() {
  let localMessage = "I exist only inside this function.";
  console.log(localMessage);
}
localScopeDemo();
// console.log(localMessage); // would cause error

// ==============================
// Part 3: Combining CSS Animations with JavaScript
// ==============================

const box = document.getElementById("animateBox");
const btnAnimate = document.getElementById("btnAnimate");

btnAnimate.addEventListener("click", function () {
  let result = toggleBoxAnimation(box);
  console.log(result);
});

const card = document.getElementById("flipCard");
const btnFlip = document.getElementById("btnFlip");

btnFlip.addEventListener("click", function () {
  let result = flipCard(card);
  console.log(result);
});
