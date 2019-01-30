import { DECKS_STORAGE_KEY } from '../helpers';
import { AsyncStorage } from 'react-native';

/**
 * Async Storage functions
 */
export function fetchAllDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(data => {
      return JSON.parse(data);
    });
}

export function saveDeck(deck) {
  AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [deck.id]: deck
  }));
  return Promise.resolve(deck);
}

export function removeDeck(key) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(results => {
      const data = JSON.parse(results);
      data[key].deletedAt = new Date().getTime();
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data));
      return data[key];
    })
}