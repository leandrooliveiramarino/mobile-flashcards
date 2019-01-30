import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import SingleItem from '../SingleItem';
import { connect } from 'react-redux';
import { formatDate, alert } from '../../utils/helpers';
import { handleRemoveHistory } from '../../actions/answersHistory';
import NotFound from '../NotFound';
import PropTypes from 'prop-types';

class AnswersHistoryScreen extends Component {

  static propTypes = {
    answersHistory: PropTypes.array.isRequired,
    handleRemoveHistory: PropTypes.func.isRequired,
  };

  renderRow({ item }, handleRemoveHistory) {
    return (
      <ListItem
        onLongPress={() => {alert({
          title: 'Remove History',
          subtitle: 'Do you really want to remove this item?',
          onPositiveAnswer: () => {
            handleRemoveHistory(item.id);
          }
        })}}
        component={(props) => (
          <SingleItem
            title={item.title}
            answerDate={item.answerDate}
            score={item.score}
            {...props}
          />
        )}
      />
    );
  }

  render() {
    return (
      <List containerStyle={styles.list}>
        <FlatList
          data={this.props.answersHistory}
          renderItem={(props) => this.renderRow({...props}, this.props.handleRemoveHistory)}
          keyExtractor={item => item.id}
          ListEmptyComponent={<NotFound message={'No history found 🤔'}/>}
        />
      </List>
    );
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

function mapDispatchToProps(dispatch) {
  return {
    handleRemoveHistory: id => dispatch(handleRemoveHistory(id))
  }
}

function mapStateToProps({decks, answersHistory}, ) {
  const list = Object
    .keys(answersHistory)
    .map(answersHistoryId => ({
      id: answersHistoryId,
      title: decks[answersHistory[answersHistoryId].deckId].title,
      answerDate: formatDate(answersHistory[answersHistoryId].answerDate),
      score: score(answersHistory[answersHistoryId].answers),
      deletedAt: answersHistory[answersHistoryId].deletedAt
    }));

  const availableHistories = list.filter(history => !history.deletedAt);

  return {
    decks,
    answersHistory: availableHistories
  };
}

const styles = StyleSheet.create({
  list: {
    marginTop: 0,
    borderTopWidth: 1,
    borderBottomWidth: 0,
    borderColor: 'transparent',
    backgroundColor: 'transparent'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AnswersHistoryScreen);