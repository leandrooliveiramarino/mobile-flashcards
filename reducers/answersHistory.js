import { ADD_ANSWER_HISTORY, GET_HISTORIES, REMOVE_ANSWERS_HISTORY } from '../actions/answersHistory';

export default function answersHistory(state = {}, action) {
  switch(action.type) {
    case GET_HISTORIES:
      return {
        ...state,
        ...action.histories
      }
    case ADD_ANSWER_HISTORY:
      return {
        ...state,
        [action.history.id]: {
          ...action.history
        }
      };
    case REMOVE_ANSWERS_HISTORY:
      return {
        ...state,
        [action.history.id]: {
          ...state[action.history.id],
          deletedAt: action.history.deletedAt
        }
      };
    default:
      return state;
  }
}