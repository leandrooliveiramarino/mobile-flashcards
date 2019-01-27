import { AsyncStorage } from 'react-native';
import { ANSWERS_HISTORY_STORAGE_KEY } from './helpers';

const decks = {
  deck1: {
    id: 'deck1',
    title: 'React Native',
    questionAmount: 15
  },
  deck2: {
    id: 'deck2',
    title: 'PHP',
    questionAmount: 10
  }
};

const cards = {
  card1: {
    id: 'card1',
    question: 'Question 1',
    answer: 'Answer 1',
    deckId: 'deck1'
  },
  card2: {
    id: 'card2',
    question: 'Question 2',
    answer: 'Answer 2',
    deckId: 'deck1'
  },
  card3: {
    id: 'card3',
    question: 'Question 1',
    answer: 'Answer 1',
    deckId: 'deck2'
  },
  card4: {
    id: 'card4',
    question: 'Question 2',
    answer: 'Answer 2',
    deckId: 'deck2'
  }
};

export const fetchAllDecks = () => {
  return Promise.resolve(decks);
}

export const fetchAllCards = () => {
  return Promise.resolve(cards);
}

export const getInitialData = () => {
  return Promise.all([
    fetchAllDecks(),
    fetchAllCards()
  ]).then(([
    decks,
    cards
  ]) => ({
    decks,
    cards
  }))
}

/**
 * Async Storage functions
 */
export function fetchAnswersHistory() {
  return AsyncStorage.getItem(ANSWERS_HISTORY_STORAGE_KEY)
    .then(data => {
      return data;
    })
}

export function saveAnswersHistory({ cardHistory, key }) {
  return AsyncStorage.mergeItem(ANSWERS_HISTORY_STORAGE_KEY, JSON.stringify({
    [key]: cardHistory
  }))
}

export function removeAnswersHistory(key) {
  return AsyncStorage.getItem(ANSWERS_HISTORY_STORAGE_KEY)
    .then(results => {
      const data = JSON.parse(results)
      data[key] = undefined
      delete data[key]
      AsyncStorage.setItem(ANSWERS_HISTORY_STORAGE_KEY, JSON.stringify(data))
    })
}