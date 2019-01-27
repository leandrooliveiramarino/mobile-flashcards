import { ADD_ANSWER_HISTORY, GET_HISTORIES } from '../actions/answersHistory';

export default answersHistory(state = {}, action) {
  switch(action.type) {
    case GET_HISTORIES:
      return {
        ...state,
        ...action.histories
      }
    case ADD_ANSWER_HISTORY:
      return {
        ...state,
        [action.history.id]: action.history
      };
    default:
      return state;
  }
}