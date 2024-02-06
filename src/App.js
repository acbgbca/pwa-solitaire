import logo from './logo.svg';
import './App.css';
import Board from './Board';

function App() {
  const cards = getShuffledDeck();

  return (
    <Board cards={ cards }/>
  );
}

function getShuffledDeck() {
  let cards = [];
  // Get all cards in the deck
  for (let suit in allCardSuits) {
    for (let rank in allCardRanks) {
        cards.push({suit: allCardSuits[suit], rank: allCardRanks[rank]});
    }
  }

  // Shuffle the cards
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }

  return cards;
}

export const allCardSuits = ["hearts", "diamonds", "clubs", "spades"];
export const allCardRanks = [
    "ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "jack",
    "queen",
    "king"
];

export default App;
