import { CARDS_STORAGE_KEY } from '../helpers';
import { AsyncStorage } from 'react-native';

/**
 * Async Storage functions
 */
export function fetchAllCards() {
  return AsyncStorage.getItem(CARDS_STORAGE_KEY)
    .then(data => {
      return JSON.parse(data);
    });
}

export function saveCard(card) {
  AsyncStorage.mergeItem(CARDS_STORAGE_KEY, JSON.stringify({
    [card.id]: card
  }));
  return Promise.resolve(card);
}
