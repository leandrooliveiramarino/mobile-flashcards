export const GET_ALL_DECKS = 'GET_ALL_DECKS';

export function getAllDecks(decks) {
  return {
    type: GET_ALL_DECKS,
    decks
  }
}