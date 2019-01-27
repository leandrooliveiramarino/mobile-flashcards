import { Alert } from 'react-native';

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

export const formatDate = (timestamp) => {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + ':' + time.slice(-2) + ' | ' + d.toLocaleDateString();
}

export const alert = ({title, subtitle, negativeLabel, onNegativeAnswer, onPositiveAnswer, positiveLabel, cancelable}) => {
  Alert.alert(
    title,
    subtitle,
    [
      {
        text: negativeLabel || 'Cancel',
        style: 'cancel',
        onPress: onNegativeAnswer
      },
      {
        text: positiveLabel || 'Yes',
        onPress: onPositiveAnswer
      },
    ],
    {
      cancelable: !!cancelable
    },
  );
}
