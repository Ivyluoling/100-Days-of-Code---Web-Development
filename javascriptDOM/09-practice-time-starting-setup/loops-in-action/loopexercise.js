// calculate sum

const calculateSumButtonElement = document.querySelector("#calculator button");

function calculateSum() {
  const userNumberInputElement = document.getElementById("user-number");
  const enteredNumber = userNumberInputElement.value;

  let sumUpToNumber = 0;

  for (let i = 0; i <= enteredNumber; i++) {
    sumUpToNumber = sumUpToNumber + i;
  }

  const outputResultElement = document.getElementById("calculated-sum");
  outputResultElement.textContent = sumUpToNumber;
  outputResultElement.style.display = "block";
}

calculateSumButtonElement.addEventListener("click", calculateSum);

// highlight links

const highlightLinksButtonElement = document.querySelector(
  "#highlight-links button"
);

function highlightLinks() {
  const anchorElements = document.querySelectorAll("#highlight-links a");

  for (const anchorElement of anchorElements) {
    anchorElement.classList.add("highlight");
  }
}

highlightLinksButtonElement.addEventListener("click", highlightLinks);

// display user information

const userData = {
  name: "John Stuart",
  age: 33,
  title: "Developer",
  company: "Xxx",
  salary: 70000,
};

const displayUserDataButtonElement =
  document.querySelector("#user-data button");

function displayUserData() {
  const outputUserData = document.querySelector("#output-user-data");

  outputUserData.innerHTML = "";

  for (const key in userData) {
    const newUserDataListItemElement = document.createElement("li");
    const outputText = key.toUpperCase() + ": " + userData[key];
    newUserDataListItemElement.textContent = outputText;
    outputUserData.append(newUserDataListItemElement);
  }
}

displayUserDataButtonElement.addEventListener("click", displayUserData);

// statistics - roll the dice

const rollDiceButtonElement = document.querySelector("#statistics button");

function rollTheDice() {
  return Math.floor(Math.random() * 6) + 1; // Math.floor(): 5.64 => 5
}

function deriveNumberOfDiceRolls() {
  const targetNumber = document.getElementById("user-target-number");
  const diceRollsListElement = document.getElementById("dice-rolls");

  const enteredNumber = targetNumber.value;
  diceRollsListElement.innerHTML = "";

  let hasRolledTargetNumber = false;
  let rollCount = 0;

  while (!hasRolledTargetNumber) {
    const rolledNumber = rollTheDice();
    // if (rolledNumber == enteredNumber) {
    //   hasRolledTargetNumber = true;
    // }
    rollCount++;
    const newRollListElement = document.createElement("li");
    const outputText = "Roll " + rollCount + ": " + rolledNumber;
    newRollListElement.textContent = outputText;
    diceRollsListElement.append(newRollListElement);
    hasRolledTargetNumber = rolledNumber == enteredNumber;
  }

  const outputResultElement = document.getElementById("output-total-rolls");
  const outputTargetNumber = document.getElementById("output-target-number");
  outputResultElement.textContent = rollCount;
  outputTargetNumber.textContent = enteredNumber;
}

rollDiceButtonElement.addEventListener("click", deriveNumberOfDiceRolls);
