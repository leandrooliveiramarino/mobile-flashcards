/**
 * variables declarations
 */
export const primaryColor = '#512ca8';
export const lightColor = '#8558da';
export const darkColor = '#140078';
export const defaultTextColor = '#fff';
export const defaultBorderColor = '#cecece';

/**
 * Async Storage
 */
export const ANSWERS_HISTORY_STORAGE_KEY = 'MobileFlashcards:answersHistory';

/**
 * TouchableOpacity
 */
export const activeOpacity = 0.6;

/**
 * helper functions
 */
export const generateUID = () => {
  return Math
    .random()
    .toString(36)
    .substring(2, 15) + Math.random().toString(36).substring(2, 15)
}