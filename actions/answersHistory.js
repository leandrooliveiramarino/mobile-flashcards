import { generateUID } from '../utils/helpers';
import { saveAnswersHistory, fetchAnswersHistory } from '../utils/api';

export const ADD_ANSWER_HISTORY = 'ADD_ANSWER_HISTORY';
export const GET_HISTORIES = 'GET_HISTORIES';

function _saveAnswersHistory(history) {
  return {
    type: ADD_ANSWER_HISTORY,
    history
  }
}

export function getAnswersHistory(histories) {
  return {
    type: GET_HISTORIES,
    histories
  }
}

export function handleGetHistory() {
  return dispatch => {
    fetchAnswersHistory()
      .then(data => {
        dispatch(getAnswersHistory(JSON.parse(data)))
      });
  }
}

export function handleAddHistory(deckId, answers) {
  const history = {
    id: generateUID(),
    deckId: deckId,
    answers: answers,
    answerDate: new Date().getTime()
  };

  return dispatch => {
    return saveAnswersHistory(history)
      .then(history => {
        dispatch(_saveAnswersHistory(history))
      })
  }
}