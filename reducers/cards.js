import { GET_ALL_CARDS, REMOVE_CARD, ADD_CARD } from '../actions/cards';

export default function cards(state = {}, action) {
  switch(action.type) {
    case GET_ALL_CARDS:
      return {
        ...state,
        ...action.cards
      };
    case ADD_CARD:
      return {
        ...state,
        [action.card.id]: {
          ...action.card
        }
      };
    case REMOVE_CARD:
      return {
        ...state,
        [action.card.id]: {
          ...state[action.card.id],
          deletedAt: action.card.deletedAt
        }
      };
    default:
      return state;
  }
}