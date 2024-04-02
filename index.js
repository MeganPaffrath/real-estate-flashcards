import { cards } from './flashcards.js';

let fCard = document.getElementById('flash-card');

// set initial card
let chapter, cardIndex, side, cardCount;

function initCard(chapterName) {
  chapter = chapterName;
  cardIndex = 0;
  side = 0;
  cardCount = cards[chapter]['cards'].length;
  if (cardCount == 0) {
    fCard.innerHTML = 'No more cards for this chapter';
    document.getElementById('card-index').innerHTML = cardIndex;
  } else {
    fCard.innerHTML = cards[chapter]['cards'][cardIndex][side];
    document.getElementById('card-index').innerHTML = cardIndex + 1;
  }
  document.getElementById('card-count').innerHTML = cardCount;
}

initCard('chapter11');

// set option buttons
let options = document.getElementById('options');
for (let chapterTitle in cards) {
  let button = document.createElement('button');
  button.id = chapterTitle;
  button.textContent =
    chapterTitle + ' (' + cards[chapterTitle]['cards'].length + ')';
  button.addEventListener('click', () => {
    initCard(chapterTitle);
  });
  options.appendChild(button);
}

// Handle flip
let flip = document.getElementById('flip');
flip.addEventListener('click', () => {
  side = side == 0 ? 1 : 0;
  fCard.innerHTML = cards[chapter]['cards'][cardIndex][side];
  fCard.style.backgroundColor = side == 0 ? '#d8d8d8' : '#efefef';
});

// handle next
let next = document.getElementById('next');
next.addEventListener('click', () => {
  cardIndex += 1;
  if (cardIndex >= cardCount) {
    cardIndex = 0;
  }

  side = 0;

  fCard.innerHTML = cards[chapter]['cards'][cardIndex][0];
  document.getElementById('card-index').innerHTML = cardIndex + 1;
  fCard.style.backgroundColor = '#d8d8d8';
});

// handle remove
let remove = document.getElementById('remove');
remove.addEventListener('click', () => {
  cards[chapter]['cards'].splice(cardIndex, 1);
  cardCount = cards[chapter]['cards'].length;
  side = 0;

  let chapterBtn = document.getElementById(chapter);
  chapterBtn.innerHTML = chapter + ' (' + cards[chapter]['cards'].length + ')';

  if (cardIndex >= cardCount) {
    cardIndex = 0;
  }
  if (cardCount == 0) {
    fCard.innerHTML = 'No more cards for this chapter';
    document.getElementById('card-index').innerHTML = 0;
  } else {
    fCard.innerHTML = cards[chapter]['cards'][cardIndex][side];
    document.getElementById('card-index').innerHTML = cardIndex + 1;
  }
  document.getElementById('card-count').innerHTML = cardCount;
});
