let cards = {
  chapter1: {
    cards: [
      ['1', 'def 1'],
      ['2', 'def 2'],
      ['3', 'def 3'],
      ['4', 'def 4'],
    ],
  },
};

let fCard = document.getElementById('flash-card');

// set initial card
let chapter = 'chapter1';
let cardIndex = 0;
let side = 0;
fCard.innerHTML = cards[chapter]['cards'][cardIndex][side];

// set card count
let cardCount = cards[chapter]['cards'].length;
document.getElementById('card-index').innerHTML = cardIndex + 1;
document.getElementById('card-count').innerHTML = cardCount;

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

  fCard.innerHTML = cards[chapter]['cards'][cardIndex][0];
  document.getElementById('card-index').innerHTML = cardIndex + 1;
});

// handle remove
let remove = document.getElementById('remove');
remove.addEventListener('click', () => {
  console.log('remove index ' + cardIndex);
  console.log(cards[chapter]['cards']);
  cards[chapter]['cards'].splice(cardIndex, 1);
  console.log(cards[chapter]['cards']);

  cardCount = cards[chapter]['cards'].length;
  console.log(cardCount);
  if (cardIndex >= cardCount) {
    cardIndex = 0;
  }
  if (cardCount == 0) {
    fCard.innerHTML = 'refresh to start over';
    document.getElementById('card-index').innerHTML = 0;
  } else {
    fCard.innerHTML = cards[chapter]['cards'][cardIndex][side];
    document.getElementById('card-index').innerHTML = cardIndex + 1;
  }
  document.getElementById('card-count').innerHTML = cardCount;
});
