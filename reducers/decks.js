import { ADD_DECK, GET_ALL_DECKS, REMOVE_DECK } from '../actions/decks';

export default function decks(state = {}, action) {
  switch(action.type) {
    case GET_ALL_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case ADD_DECK:
      return {
        ...state,
        [action.deck.id]: {
          ...action.deck
        }
      };
    case REMOVE_DECK:
      return {
        ...state,
        [action.deck.id]: {
          ...state[action.deck.id],
          deletedAt: action.deck.deletedAt
        }
      };
    default:
      return state;
  }
}