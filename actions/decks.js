export const GET_ALL_DECKS = 'GET_ALL_DECKS';
const decks = [{key: 'a'}, {key: 'b'}];

export function fetchAllDecks() {
  return dispatch => {
    return dispatch(decks);
  }
}