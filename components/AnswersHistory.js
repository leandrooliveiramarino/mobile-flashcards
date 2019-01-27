import React, { Component } from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import SingleItem from './SingleItem';
import { connect } from 'react-redux';
import { formatDate } from '../utils/helpers';

class AnswersHistory extends Component {
  renderRow ({ item }) {
    return (
      <ListItem
        component={() => (
          <SingleItem
            title={item.title}
            answerDate={item.answerDate}
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
          data={this.props.answersHistory}
          renderItem={this.renderRow}
          keyExtractor={item => item.id}
        />
      </List>
    )
  }
}

const processScore = answers => {
  const amountQuestions = answers.length;
  const correctAnswers = answers.filter(history => history.answer).length;

  return {
    correctAnswers,
    amountQuestions
  };
}

const score = answers => {
  const { correctAnswers, amountQuestions } = processScore(answers);
  return `${correctAnswers}/${amountQuestions}`;
}

function mapStateToProps({decks, answersHistory}, ) {
  const list = Object
    .keys(answersHistory)
    .map(answersHistoryId => ({
      id: answersHistoryId,
      title: decks[answersHistory[answersHistoryId].deckId].title,
      answerDate: formatDate(answersHistory[answersHistoryId].answerDate),
      score: score(answersHistory[answersHistoryId].answers)
    }));

  return {
    decks,
    answersHistory: list
  };
}

const styles = StyleSheet.create({
  list: {
    marginTop: 0,
    borderTopWidth: 1,
    borderBottomWidth: 0,
    borderColor: 'transparent'
  }
});

export default connect(mapStateToProps)(AnswersHistory);