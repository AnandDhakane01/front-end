
const all = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const container = document.querySelector('.container');
const cardLength = 12;
var clickSound = new Audio('sounds/mixkit-video-game-mystery-alert-234.wav');
var cardsMatch = new Audio('sounds/mixkit-quick-win-video-game-notification-269.wav');


function getRandomChars() {
    var result = [];
    while (result.length < 6) {
        let char = all.charAt(Math.floor(Math.random() * all.length));
        if (result.includes(char)) {
            continue;
        }
        result.push(char);
    }
    return result;
}

function add_card(letter, id) {
    const flipCardOuter = document.createElement('div');
    flipCardOuter.classList.add('flip-card-outer');
    flipCardOuter.innerHTML = `
    <div class="flip-card-inner"> 
        <div class="flip-card-front">
            <img src="https://miro.medium.com/max/768/1*EuiWbLhC7YZPBfs3lXhwaQ.png" alt="avatar">
        </div>
        <div class="flip-card-back">`
            + letter + 
        `</div>
    </div>`
    container.appendChild(flipCardOuter);
}

function shuffleArray(array) {
   for (var i = array.length - 1; i > 0; i--) { 
       // Generate random number 
       var j = Math.floor(Math.random() * (i + 1));
       var temp = array[i];
       array[i] = array[j];
       array[j] = temp;
   }
   return array;
}

function EventHandeling() {
    for (let i = 0; i < cardLength; i++) {
        allCards[i].addEventListener('click', () => {
            clickSound.play();
            allCards[i].style.transform = "rotateY(180deg)";
            flippedCards.push(allCards[i]);
            console.log(allCards[i]);
            if (flippedCards.length == 2) {
                container.style.pointerEvents = "none";
                setTimeout(pairDetection, 2000);
            }
        })
    }
}

function pairDetection() {

    if (flippedCards[0].innerText == flippedCards[1].innerText) {
        // pair detected
        cardsMatch.play();
        for (const card of flippedCards) {
            card.style.visibility = 'hidden';
        }
        flippedCards = [];
    }
    else {
        // flip them back
        for (const c of flippedCards) {
            c.removeAttribute('style');
        }
        flippedCards = [];
        }
    container.removeAttribute('style');
}

//MAIN

var chars = getRandomChars();
var charsCopy = [...chars];
chars = shuffleArray(chars.concat(charsCopy));

// add cards
for(let i = 0; i < cardLength; i++) {
    add_card(chars[i], i+1);
}

const allCards = document.getElementsByClassName('flip-card-inner');
let flippedCards = [];

EventHandeling()

        