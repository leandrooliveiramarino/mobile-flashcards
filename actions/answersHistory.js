export { generateUID } from '../utils/helpers';
export { saveAnswersHistory } from '../utils/api';

export const ADD_ANSWER_HISTORY = 'ADD_ANSWER_HISTORY';
export const GET_HISTORIES = 'GET_HISTORIES';

function _saveAnswersHistory(history) {
  return {
    type: ADD_ANSWER_HISTORY,
    history
  }
}

export function handleAddHistory(deckId, answers) {
  const history = {
    id: generateUID(),
    deckId: deckId,
    answers: answers
  };

  return dispatch => {
    return saveAnswersHistory(history)
      .then(history => {
        dispatch(_saveAnswersHistory(history))
      })
  }
}