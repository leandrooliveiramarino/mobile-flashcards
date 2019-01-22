import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import reducer from './reducers'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import DeckList from './components/DeckList';
import SystemTopBar from './components/SystemTopBar';
import { primaryColor } from './utils/helpers';
import Header from './components/Header';
import DeckCreation from './components/DeckCreation';

export default class App extends React.Component {

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <SystemTopBar backgroundColor={primaryColor}/>
        <Header/>
        <View style={styles.container}>
          {
            /**
             * <DeckList />
             */
          }
          {
            /**
             * <DeckCreation/>
             */
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
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
});

/**
 * https://material.io/tools/color/#!/?view.left=0&view.right=0&primary.color=512DA8
 */
