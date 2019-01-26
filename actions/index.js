import { getInitialData } from '../utils/api';
import { getAllDecks } from './decks';
import { getAllCards } from './cards';

export function handleInitialData() {
  return dispatch => getInitialData()
    .then(({decks, cards}) => {
      dispatch(getAllDecks(decks));
      dispatch(getAllCards(cards));
    });
}