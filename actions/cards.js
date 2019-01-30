import { saveCard } from '../utils/api/cards';
import { generateUID } from '../utils/helpers';

export const GET_ALL_CARDS = 'GET_ALL_CARDS';
export const ADD_CARD = 'ADD_CARD';

export function getAllCards(cards) {
  return {
    type: GET_ALL_CARDS,
    cards
  };
}

function _saveCard(card) {
  return {
    type: ADD_CARD,
    card
  };
}

export function handleAddCard({question, answer, deckId}) {
  const card = {
    id: generateUID(),
    question,
    answer,
    deckId
  };
  return dispatch => {
    return saveCard(card).then(card => {
      dispatch(_saveCard(card));
    });
  };
}