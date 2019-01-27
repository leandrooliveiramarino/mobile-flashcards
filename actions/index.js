import { getInitialData } from '../utils/api';
import { getAllDecks } from './decks';
import { getAllCards } from './cards';
import { getAnswersHistory } from './answersHistory';

export function handleInitialData() {
  return dispatch => getInitialData()
    .then(({decks, cards, answersHistory}) => {
      dispatch(getAllDecks(decks));
      dispatch(getAllCards(cards));
      dispatch(getAnswersHistory(answersHistory))
    });
}