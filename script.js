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
    }
];

for (const cocktail of cocktails) {
    if (cocktail.mastery >= 100) {
        console.log(`${cocktail.name} mastered!`)
    } else {
        console.log(`${cocktail.name} needs practise.`)
    }
};

const card = document.createElement("div");

card.classList.add("cocktail-card");

console.log(card)