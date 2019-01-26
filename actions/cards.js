export const GET_ALL_CARDS = 'GET_ALL_CARDS';

export function getAllCards(cards) {
  return {
    type: GET_ALL_CARDS,
    cards
  }
}