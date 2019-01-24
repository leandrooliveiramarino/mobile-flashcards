import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import reducer from './reducers'
import { StyleSheet, Text, View, Image, FlatList, Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import DeckList from './components/DeckList';
import SystemTopBar from './components/SystemTopBar';
import { primaryColor, defaultTextColor, darkColor } from './utils/helpers';
import Header from './components/Header';
import DeckCreation from './components/DeckCreation';
import QuizScreen from './components/QuizScreen';
import CreateQuizQuestionScreen from './components/CreateQuizQuestionScreen';
import QuizQuestionScreen from './components/QuizQuestionScreen';
import QuizAnswerScreen from './components/QuizAnswerScreen';
import QuizResultScreen from './components/QuizResultScreen';
import { FontAwesome, Ionicons } from '@expo/vector-icons'

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Deck List'
    },
  },
  DeckCreation: {
    screen: DeckCreation,
    navigationOptions: {
      tabBarLabel: 'Create Deck'
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

export default class App extends React.Component {

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <SystemTopBar backgroundColor={primaryColor}/>
        {
          // <Header/>
        }
        <View style={styles.container}>
          {
            <Tabs />
          }
          {
            // <DeckCreation/>
          }
          {
            // <QuizScreen/>
          }
          {
            // <CreateQuizQuestionScreen/>
          }
          {
            // <QuizQuestionScreen/>
          }
          {
            // <QuizAnswerScreen/>
          }
          {
            // <QuizResultScreen/>
          }
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  }
});

/**
 * https://material.io/tools/color/#!/?view.left=0&view.right=0&primary.color=512DA8
 */
