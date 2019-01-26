import { GET_ALL_CARDS } from '../actions/cards';

export default function cards(state = {}, action) {
  switch(action.type) {
    case GET_ALL_CARDS:
      return {
        ...state,
        ...action.cards
      };
    default:
      return state;
  }
}