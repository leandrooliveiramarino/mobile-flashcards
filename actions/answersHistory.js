import { generateUID } from '../utils/helpers';
import { fetchAnswersHistory, saveAnswersHistory, removeAnswersHistory } from '../utils/api/answersHistory';

export const ADD_ANSWER_HISTORY = 'ADD_ANSWER_HISTORY';
export const GET_HISTORIES = 'GET_HISTORIES';
export const REMOVE_ANSWERS_HISTORY = 'REMOVE_ANSWERS_HISTORY';

function _saveAnswersHistory(history) {
  return {
    type: ADD_ANSWER_HISTORY,
    history
  };
}

function _removeAnswerHistory(history) {
  return {
    type: REMOVE_ANSWERS_HISTORY,
    history
  };
}

export function getAnswersHistory(histories) {
  return {
    type: GET_HISTORIES,
    histories
  };
}

export function handleGetHistory() {
  return dispatch => {
    fetchAnswersHistory()
      .then(data => {
        dispatch(getAnswersHistory(JSON.parse(data)))
      });
  };
}

export function handleAddHistory(deckId, answers) {
  const history = {
    id: generateUID(),
    deckId: deckId,
    answers: answers,
    answerDate: new Date().getTime()
  };

  return dispatch => {
    return saveAnswersHistory(history).then(history => {
      dispatch(_saveAnswersHistory(history));
    });
  };
}

export function handleRemoveHistory(historyId) {
  return dispatch => {
    return removeAnswersHistory(historyId)
      .then((history) => {
        dispatch(_removeAnswerHistory(history));
      });
  };
}