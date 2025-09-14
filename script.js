// === Part 2: Functions with scope, parameters & return values ===

// Global variable
let globalCount = 0;

// Function with parameters & return value
function multiply(num1, num2) {
  let result = num1 * num2;  // local variable
  return result;
}

// Function that demonstrates scope
function incrementGlobal() {
  globalCount++; // modifies global
  return globalCount;
}

// Function to add a class that triggers animation
function triggerAnimation(element, className) {
  element.classList.add(className);

  // Remove class after animation ends so it can be reused
  element.addEventListener("animationend", () => {
    element.classList.remove(className);
  }, { once: true });
}

// === Part 3: Combining CSS & JS ===

// Animate box on button click
const box = document.querySelector(".box");
const animateBtn = document.getElementById("animateBtn");

animateBtn.addEventListener("click", () => {
  triggerAnimation(box, "animate");
  console.log("5 * 3 =", multiply(5, 3));
  console.log("Global count is now:", incrementGlobal());
});

// Modal functionality
const modal = document.getElementById("modal");
const toggleModalBtn = document.getElementById("toggleModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

toggleModalBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  setTimeout(() => modal.classList.add("show"), 10); // allow CSS transition
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("show");
  setTimeout(() => modal.classList.add("hidden"), 500); // wait for fade out
});