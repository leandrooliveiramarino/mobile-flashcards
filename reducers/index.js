import { combineReducers } from 'redux';
import decks from './decks';
import cards from './cards';
import answersHistory from './answersHistory';

export default combineReducers({
  decks,
  cards,
  answersHistory
});
