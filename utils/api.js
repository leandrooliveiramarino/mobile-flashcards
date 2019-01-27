import { AsyncStorage } from 'react-native';
import { fetchAllAnswersHistory } from './api/answersHistory';
import { fetchAllDecks } from './api/decks';
import { fetchAllCards } from './api/cards';

// const decks = {
//   deck1: {
//     id: 'deck1',
//     title: 'React Native',
//     questionAmount: 15
//   },
//   deck2: {
//     id: 'deck2',
//     title: 'PHP',
//     questionAmount: 10
//   }
// };

// const cards = {
//   card1: {
//     id: 'card1',
//     question: 'Question 1',
//     answer: 'Answer 1',
//     deckId: 'deck1'
//   },
//   card2: {
//     id: 'card2',
//     question: 'Question 2',
//     answer: 'Answer 2',
//     deckId: 'deck1'
//   },
//   card3: {
//     id: 'card3',
//     question: 'Question 1',
//     answer: 'Answer 1',
//     deckId: 'deck2'
//   },
//   card4: {
//     id: 'card4',
//     question: 'Question 2',
//     answer: 'Answer 2',
//     deckId: 'deck2'
//   }
// };

// const fetchAllDecks = () => {
//   return Promise.resolve(decks);
// }

// const fetchAllCards = () => {
//   return Promise.resolve(cards);
// }

export const getInitialData = () => {
  return Promise.all([
    fetchAllDecks(),
    fetchAllCards(),
    fetchAllAnswersHistory()
  ]).then(([
    decks,
    cards,
    answersHistory
  ]) => ({
    decks,
    cards,
    answersHistory
  }))
}