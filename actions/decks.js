import { fetchDeck, saveDeck } from '../utils/api/decks';
import { generateUID } from '../utils/helpers';

export const GET_ALL_DECKS = 'GET_ALL_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const REMOVE_DECK = 'REMOVE_DECK';

export function getAllDecks(decks) {
  return {
    type: GET_ALL_DECKS,
    decks
  }
}

function _removeDeck(deck) {
  return {
    type: REMOVE_DECK,
    deck
  }
}

export function handleRemoveDeck(deckId) {
  return dispatch => {
    return removeDeck(deckId)
      .then((deck) => {
        dispatch(_removeDeck(deck));
      });
  }
}

function _saveDeck(deck) {
  return {
    type: ADD_DECK,
    deck
  }
}

export function handleAddDeck(title) {
  const deck = {
    id: generateUID(),
    title
  };

  return dispatch => {
    return saveDeck(deck).then(deck => {
      dispatch(_saveDeck(deck));
    })
  }
}