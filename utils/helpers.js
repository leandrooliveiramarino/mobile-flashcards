import { Alert, AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

/**
 * variables declarations
 */
export const primaryColor = '#01579b';
export const lightColor = '#4f83cc';
export const darkColor = '#002f6c';
export const defaultTextColor = '#fff';
export const defaultBorderColor = '#cecece';
export const backgroundColor = 'transparent';

/**
 * Async Storage
 */
export const ANSWERS_HISTORY_STORAGE_KEY = 'MobileFlashcards:answersHistory';
export const DECKS_STORAGE_KEY = 'MobileFlashcards:decks';
export const CARDS_STORAGE_KEY = 'MobileFlashcards:cards';
export const NOTIFICATION_KEY = 'MobileFlashcards:notifications'

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
    .substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

export const formatDate = (timestamp) => {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + ':' + time.slice(-2) + ' | ' + d.toLocaleDateString();
}

export const alert = ({
  title,
  subtitle,
  negativeLabel,
  onNegativeAnswer,
  onPositiveAnswer,
  positiveLabel,
  cancelable
}) => {
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

export const filterActiveItems = items => {
  const availableIds = Object.keys(items).filter(itemId => !items[itemId].deletedAt);
  let filteredItems = {};

  /**
   * Transformando array em objeto formatado
   */
  availableIds.forEach(id => {
    filteredItems[id] = {
      ...items[id]
    }
  });

  return filteredItems;
}

/**
 * Notifications
 */
export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync);
}

const createNotification = () => {
  return {
    title: 'Let\'s study today!',
    body: "👋 don't forget to study today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  };
}

export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync();

              let tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate() + 1);
              tomorrow.setHours(13);
              tomorrow.setMinutes(30);

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              );
              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
            }
          });
      }
    });
}
