import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import reducer from './reducers'
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import DeckListScreen from './components/screens/DeckListScreen';
import SystemTopBar from './components/SystemTopBar';
import {
  primaryColor,
  defaultTextColor,
  backgroundColor,
  setLocalNotification,
  clearLocalNotification
} from './utils/helpers';
import DeckCreationScreen from './components/screens/DeckCreationScreen';
import QuizScreen from './components/screens/QuizScreen';
import AnswersHistoryScreen from './components/screens/AnswersHistoryScreen';
import CreateQuizQuestionScreen from './components/screens/CreateQuizQuestionScreen';
import QuizContentScreen from './components/screens/QuizContentScreen';
import middleware from './middleware';

const Tabs = TabNavigator({
  DeckListScreen: {
    screen: DeckListScreen,
    navigationOptions: {
      tabBarLabel: 'Deck List'
    },
  },
  DeckCreationScreen: {
    screen: DeckCreationScreen,
    navigationOptions: {
      tabBarLabel: 'Create Deck'
    },
  },
  AnswersHistoryScreen: {
    screen: AnswersHistoryScreen,
    navigationOptions: {
      tabBarLabel: 'History'
    },
  }
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: defaultTextColor,
    style: {
      height: 54,
      backgroundColor: primaryColor,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
});


const Stack = StackNavigator({
  Home: {
    screen: Tabs,
  },
  QuizScreen: {
    screen: QuizScreen,
    navigationOptions: {
      headerTintColor: defaultTextColor,
      headerStyle: {
        backgroundColor: primaryColor,
      }
    }
  },
  CreateQuizQuestionScreen: {
    screen: CreateQuizQuestionScreen,
    navigationOptions: {
      headerTintColor: defaultTextColor,
      headerStyle: {
        backgroundColor: primaryColor,
      }
    }
  },
  QuizContentScreen: {
    screen: QuizContentScreen,
    navigationOptions: {
      headerTintColor: defaultTextColor,
      headerStyle: {
        backgroundColor: primaryColor,
      }
    }
  }
}, {
  headerMode: 'none'
});

export default class App extends React.Component {

  componentDidMount() {
    clearLocalNotification();
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <SystemTopBar/>
        <View style={styles.container}>
          <Stack />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    justifyContent: 'center',
  }
});

/**
 * https://material.io/tools/color/#!/?view.left=0&view.right=0&primary.color=01579B
 */
