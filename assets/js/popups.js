// Instruction pop ups
// Creating elements
const instructionsButton = document.getElementById("instruction");
const modalOverlay = document.createElement("div");
const title = document.createElement('h3')
const instruction1 = document.createElement('p')
const instruction2 = document.createElement('p')
const instruction3 = document.createElement('p')
const exitBtn = document.createElement('button')
const div = document.createElement('div')

// Setting attributes
div.setAttribute('class', 'modaldiv')

// Setting Text for pop up
title.textContent = 'Instructions'
instruction1.textContent = "The blue cube is the snake and the yellow cube is the food."
instruction2.textContent = "The purpose of the game is to feed the snake as many times as you can to grow the snake.";
instruction3.textContent = "You lose if: the snake touches it's own tail & if the snake goes out of bound."
exitBtn.textContent = "Return to Game"

// Appending
div.appendChild(title);
div.appendChild(instruction1);
div.appendChild(instruction2);
div.appendChild(instruction3);
div.appendChild(exitBtn)
modalOverlay.appendChild(div);

modalOverlay.classList.add("modal-overlay");

// Event Listeners
instructionsButton.addEventListener("click", function() {
    console.log('button works!')
    document.body.appendChild(modalOverlay);
});
modalOverlay.addEventListener("click", function() {
    modalOverlay.remove();
});



// View Score
// Getting local Storage Items
var levels = JSON.parse(localStorage.getItem("level")) || [];
var points = JSON.parse(localStorage.getItem("points")) || [];

// Creating Elements
const viewBtn = document.getElementById("view");
const modalOverlay2 = document.createElement("div");
const titleScore = document.createElement('h3')
const Btn = document.createElement('button')
const divScore = document.createElement('div')
const table = document.createElement('table')
const titleRow = document.createElement('tr')
const Ltitle = document.createElement("td")
const Ptitle = document.createElement("td")

divScore.setAttribute('class', 'modaldiv')
// Setting text for content
titleScore.textContent = 'Top 5 Highest'
Ltitle.textContent = 'Level'
Ptitle.textContent = 'Point'
titleRow.appendChild(Ltitle)
titleRow.appendChild(Ptitle)
table.appendChild(titleRow)
// Looping though saved localstorage items, creating elements for them and appending
for (var i = 0; i < 6; i++) {
    const trElement = document.createElement('tr')
    const tdLevel = document.createElement('td')
    const tdPoint = document.createElement('td')

    tdLevel.textContent = levels[i];
    tdPoint.textContent = points[i];

    trElement.appendChild(tdLevel)
    trElement.appendChild(tdPoint)
    table.appendChild(trElement)
}

Btn.textContent = "Return to Game"

// Appending items to modal
divScore.appendChild(titleScore);
divScore.appendChild(table)
divScore.appendChild(Btn)
modalOverlay2.appendChild(divScore);
modalOverlay2.classList.add("modal-overlay");

// Event lsteners
viewBtn.addEventListener("click", function() {
    document.body.appendChild(modalOverlay2);
});

modalOverlay2.addEventListener("click", function() {
    modalOverlay2.remove();
});