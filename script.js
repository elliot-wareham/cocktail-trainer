const cocktails = [
    {
        name: "Mai Tai",
        mastery: 42
    },
    {
        name: "Bramble",
        mastery: 88
    },
    {
        name: "Old Fashioned",
        mastery: 100
    },
    {
        name: "Margarita",
        mastery: 100
    },
    {
        name: "Espresso XO",
        mastery: 100
    },
    {
        name: "Napalm Skies",
        mastery: 33
    },
    {
        name: "Pornstar Martini",
        mastery: 100
    },
    {
        name: "Kinder Bueno",
        mastery: 100
    },
    {
        name: "Bad Habits",
        mastery: 80
    },
    {
        name: "The Big Green One",
        mastery: 84
    },
    {
        name: "Drumstick",
        mastery: 90
    },
    {
        name: "White Russian",
        mastery: 52
    },
    {
        name: "Aperol Spritz",
        mastery: 90
    },
    {
        name: "Jammy Dodger",
        mastery: 100
    },
    {
        name: "Hugo Spritz",
        mastery: 80
    }
];

// Cocktail carousel section on dashboard

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


