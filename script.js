// Cocktail carousel section

const carousel = document.querySelector(".cocktail-carousel");

for (const cocktail of cocktails) {
    const card = document.createElement("div");
    const cocktailCardHeading = document.createElement("h3");
    const masterySection = document.createElement("div");
    const masteryInfo = document.createElement("div");
    const masteryInfoText = document.createElement("span");
    const masteryInfoPercentage = document.createElement("span");
    const progressBar = document.createElement("div");
    const progressBarFill = document.createElement("div");
    card.classList.add("cocktail-card");
    masterySection.classList.add("mastery-section");
    masteryInfo.classList.add("mastery-info");
    progressBar.classList.add("progress-bar");
    progressBarFill.classList.add("progress-fill");
    card.appendChild(cocktailCardHeading);
    card.appendChild(masterySection);
    masterySection.appendChild(masteryInfo);
    masteryInfo.appendChild(masteryInfoText);
    masteryInfo.appendChild(masteryInfoPercentage);
    masterySection.appendChild(progressBar);
    progressBar.appendChild(progressBarFill);
    cocktailCardHeading.textContent = cocktail.name;
    masteryInfoText.textContent = "Mastery";
    masteryInfoPercentage.textContent = `${cocktail.mastery}%`;
    progressBarFill.style.width = `${cocktail.mastery}%`;
    if (cocktail.mastery >= 100) {
        progressBarFill.classList.add("fill-100")
    };
    carousel.appendChild(card);
};

// needs attention section

const attentionCardsList = document.querySelector(".attention-list");

for (const cocktail of cocktails) {
    if (cocktail.mastery < 60) {
        const attentionCard = document.createElement("div");
        const attentionCardHeading = document.createElement("h3");
        const masteryAttentionSection = document.createElement("div");
        const masteryAttentionSectionInfo = document.createElement("div");
        const masteryText = document.createElement("span");
        const masteryPercentage = document.createElement("span");
        const masteryAttentionSectionProgressBar = document.createElement("div");
        const masteryAttentionSectionProgressBarFill = document.createElement("div");
        const lastTimePractised = document.createElement("p");
        masteryAttentionSection.classList.add("mastery-section");
        masteryAttentionSectionInfo.classList.add("mastery-info");
        masteryAttentionSectionProgressBar.classList.add("progress-bar");
        attentionCard.classList.add("attention-card");
        masteryAttentionSectionProgressBarFill.classList.add("progress-fill");
        attentionCardsList.appendChild(attentionCard);
        attentionCard.appendChild(attentionCardHeading);
        attentionCard.appendChild(masteryAttentionSection);
        masteryAttentionSection.appendChild(masteryAttentionSectionInfo);
        masteryAttentionSectionInfo.appendChild(masteryText);
        masteryAttentionSectionInfo.appendChild(masteryPercentage);    
        masteryAttentionSection.appendChild(masteryAttentionSectionProgressBar);
        masteryAttentionSectionProgressBar.appendChild(masteryAttentionSectionProgressBarFill);
        attentionCard.appendChild(lastTimePractised);
        attentionCardHeading.textContent = cocktail.name;
        masteryText.textContent = "Mastery";
        masteryPercentage.textContent = `${cocktail.mastery}%`;
        masteryAttentionSectionProgressBarFill.style.width = `${cocktail.mastery}%`;
        lastTimePractised.textContent = `Last practised: ${cocktail.lastPractised}`;
    }
};

const leftArrow = document.querySelector(".carousel-arrow-left");
const rightArrow = document.querySelector(".carousel-arrow-right");

function scrollLeft () {
    carousel.scrollBy ({
        left: -300,
        behavior: "smooth"
    });
}

function scrollRight () {
    carousel.scrollBy ({
        left: 300,
        behavior: "smooth"
    });
}

leftArrow.addEventListener("click", scrollLeft);
rightArrow.addEventListener("click", scrollRight);

function updateArrows () {
    if (carousel.scrollLeft === 0) {
        leftArrow.style.display = "none";
    } else {
        leftArrow.style.display = "block";
    };
    if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
        rightArrow.style.display = "none";
    } else {
        rightArrow.style.display = "block";
    }
}

updateArrows();

carousel.addEventListener("scroll", updateArrows);