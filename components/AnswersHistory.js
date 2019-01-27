import React, { Component } from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import SingleItem from './SingleItem';

const list = [
  {
    title: 'React Native',
    dateAnswered: '2018.06.10',
    score: '8/10'
  },
  {
    title: 'PHP',
    dateAnswered: '2018.06.10',
    score: '8/10'
  },
]

class AnswersHistory extends Component {

  renderRow ({ item }) {
    return (
      <ListItem
        component={() => (
          <SingleItem
            title={item.title}
            dateAnswered={item.dateAnswered}
            score={item.score}
          />
        )}
      />
    )
  }

  render () {
    return (
      <List containerStyle={styles.list}>
        <FlatList
          data={list}
          renderItem={this.renderRow}
          keyExtractor={item => item.title}
        />
      </List>
    )
  }
}

const styles = StyleSheet.create({
  list: {
    marginTop: 0,
    borderTopWidth: 1,
    borderBottomWidth: 0,
    borderColor: 'transparent'
  }
});

export default AnswersHistory;