// Training Page

const currentCocktail = cocktails[0];

const trainingCard = document.createElement("div");
trainingCard.classList.add("training-card");
const trainingCardHeading = document.createElement("h3");
const trainingCardQuestionText = document.createElement("p");
const trainingCardQuestionBtn = document.createElement("button");
const trainingCardAnswerArea = document.createElement("div");
trainingCardAnswerArea.classList.add("answer-options");

trainingCardHeading.textContent = currentCocktail.name;
trainingCardQuestionText.textContent = `What glass is a ${currentCocktail.name} served in?`;
trainingCardQuestionBtn.textContent = "Select Answer";

trainingCard.appendChild(trainingCardHeading);
trainingCard.appendChild(trainingCardQuestionText);
trainingCard.appendChild(trainingCardQuestionBtn);
trainingCard.appendChild(trainingCardAnswerArea);

const trainingArea = document.querySelector(".training-area");
trainingArea.appendChild(trainingCard);

function revealAnswerOptions() {
    for (const glass of glasses) {
        const answerOption = document.createElement("button")
        answerOption.textContent = glass
        trainingCardAnswerArea.appendChild(answerOption);
    }
}

trainingCardQuestionBtn.addEventListener("click", revealAnswerOptions);