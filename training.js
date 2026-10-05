console.log("Training JS loaded");

// Training Page

const trainingCard = document.createElement("div");
const trainingCardHeading = document.createElement("h3");
const trainingCardQuestionText = document.createElement("p");
const trainingCardQuestionBtn = document.createElement("button");

trainingCard.classList.add("training-card");

trainingCard.appendChild(trainingCardHeading);
trainingCard.appendChild(trainingCardQuestionText);
trainingCard.appendChild(trainingCardQuestionBtn);

const trainingArea = document.querySelector(".training-area");
trainingArea.appendChild(trainingCard);

const currentCocktail = cocktails[0];

trainingCardHeading.textContent = currentCocktail.name;

trainingCardQuestionText.textContent = `What glass is a ${currentCocktail.name} served in?`;