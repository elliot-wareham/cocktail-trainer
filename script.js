const cocktails = [
    {
        name: "Mai Tai",
        mastery: 65,
        lastPractised: "5 days ago"
    },
    {
        name: "Bramble",
        mastery: 88,
        lastPractised: "3 days ago"
    },
    {
        name: "Old Fashioned",
        mastery: 60,
        lastPractised: "2 days ago"
    },
    {
        name: "Margarita",
        mastery: 100,
        lastPractised: "3 days ago"
    },
    {
        name: "Espresso XO",
        mastery: 60,
        lastPractised: "3 days ago"
    },
    {
        name: "Napalm Skies",
        mastery: 60,
        lastPractised: "3 days ago"
    },
    {
        name: "Pornstar Martini",
        mastery: 84,
        lastPractised: "5 days ago"
    },
    {
        name: "Kinder Bueno",
        mastery: 100,
        lastPractised: "3 days ago"
    },
    {
        name: "Bad Habits",
        mastery: 80,
        lastPractised: "2 days ago"
    },
    {
        name: "The Green One",
        mastery: 44,
        lastPractised: "3 days ago"
    },
    {
        name: "Drumstick",
        mastery: 90,
        lastPractised: "5 days ago"
    },
    {
        name: "White Russian",
        mastery: 42,
        lastPractised: "2 days ago"
    },
    {
        name: "Aperol Spritz",
        mastery: 90,
        lastPractised: "5 days ago"
    },
    {
        name: "Jammy Dodger",
        mastery: 100,
        lastPractised: "3 days ago"
    },
    {
        name: "Hugo Spritz",
        mastery: 80,
        lastPractised: "2 days ago"
    }
];

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
    console.log("left arrow clicked");
}

leftArrow.addEventListener("click", scrollLeft);
rightArrow.addEventListener("click", ???);
