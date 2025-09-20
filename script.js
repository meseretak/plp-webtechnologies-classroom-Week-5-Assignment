// Part 1: Variables & Conditionals
let userName = "Mesi";
let userAge = 25;

if (userAge >= 18) {
  console.log(`${userName} is an adult.`);
} else {
  console.log(`${userName} is a minor.`);
}

// Part 2: Functions
function addNumbers(a, b) {
  return a + b;
}

function changeGreeting(newText) {
  document.getElementById("greeting").textContent = newText;
}

// Part 3: Loops
function listNumbers() {
  let list = document.getElementById("list");
  list.innerHTML = "";
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = `Number ${i}`;
    list.appendChild(li);
  }
}

function countDown(n) {
  while (n > 0) {
    console.log("Countdown: " + n);
    n--;
  }
}

// Part 4: DOM Interactions
document.getElementById("changeTextBtn").addEventListener("click", () => {
  changeGreeting("Hello, from JavaScript!");
});

document.getElementById("calcBtn").addEventListener("click", () => {
  let sum = addNumbers(5, 10);
  alert("The sum of 5 and 10 is " + sum);
});

document.getElementById("loopBtn").addEventListener("click", () => {
  listNumbers();
  countDown(3);
});
