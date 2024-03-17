const submit = document.getElementById("submit");
const result = document.getElementById("result");
const player = document.getElementById("player");
const computer = document.getElementById("computer");
const replay = document.getElementById("playAgain");
const moves = ["rock", "paper", "scissors"];
const html = document.querySelector("html");

function hello(event) {
  event.preventDefault();
  const playerChoice = document.getElementById("move").value;
  console.log(playerChoice);
  const computerChoice = moves[Math.floor(Math.random() * moves.length)];
  console.log(computerChoice);
  player.innerText = "You chose " + playerChoice;
  computer.innerText += "The Computer chose " + computerChoice;

  // Set a timeout to call determineWinner after 1000 milliseconds (1 seconds)
  setTimeout(function () {
    const result = determineWinner(playerChoice, computerChoice);
  }, 1000);
}

function determineWinner(playerChoice, computerChoice) {
  let message, color;

  if (playerChoice === computerChoice) {
    message = "It's a tie! ☺️";
    color = "orange"; // You can set a different color for ties.
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    message = "You win! 🥳";
    color = "green";
  } else {
    message = "Computer wins! 😞";
    color = "red";
  }
  console.log(message);
  result.style.color = color;
  result.innerHTML = message;
  replay.classList.remove("disabled");
  submit.classList.add("disabled");
}

submit.onclick = hello;
replay.onclick = function (event) {
  event.preventDefault();
  player.innerText = "";
  computer.innerText = "";
  result.innerText = "";
  replay.classList.add("disabled");
  submit.classList.remove("disabled");
};

//initial state

const htmlElement = document.querySelector("html");
const themeSwitch = document.getElementById("themeSwitch");
const moonIcon = document.getElementById("moonIcon");
const sunIcon = document.getElementById("sunIcon");
htmlElement.setAttribute("data-bs-theme", "dark");
moonIcon.style.color = "yellow";

function changeTheme() {
  if (themeSwitch.checked) {
    htmlElement.setAttribute("data-bs-theme", "dark");
    moonIcon.style.color = "yellow"; // Adjust icon color when dark theme
  } else {
    htmlElement.removeAttribute("data-bs-theme");
    sunIcon.style.color = "black"; // Adjust icon color when light theme
  }
}
