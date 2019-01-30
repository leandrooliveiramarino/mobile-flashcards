import { ANSWERS_HISTORY_STORAGE_KEY } from '../helpers';
import { AsyncStorage } from 'react-native';

/**
 * Async Storage functions
 */
export function fetchAllAnswersHistory() {
  return AsyncStorage.getItem(ANSWERS_HISTORY_STORAGE_KEY)
    .then(data => {
      return JSON.parse(data);
    });
}

export function saveAnswersHistory(cardHistory) {
  AsyncStorage.mergeItem(ANSWERS_HISTORY_STORAGE_KEY, JSON.stringify({
    [cardHistory.id]: cardHistory
  }));
  return Promise.resolve(cardHistory);
}

export function removeAnswersHistory(key) {
  return AsyncStorage.getItem(ANSWERS_HISTORY_STORAGE_KEY)
    .then(results => {
      const data = JSON.parse(results);
      data[key].deletedAt = new Date().getTime();
      AsyncStorage.setItem(ANSWERS_HISTORY_STORAGE_KEY, JSON.stringify(data));
      return data[key];
    });
}