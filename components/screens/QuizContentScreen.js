import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../Header';
import QuizQuestion from '../QuizQuestion';
import QuizAnswer from '../QuizAnswer';
import QuizResult from '../QuizResult';
import { connect } from 'react-redux';
import { handleAddHistory } from '../../actions/answersHistory';
import PropTypes from 'prop-types';

class QuizContentScreen extends Component {

  static propTypes = {
    cards: PropTypes.object.isRequired,
    handleAddHistory: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired
  };

  state = {
    showAnswer: false,
    cardsAnswered: [],
    cards: [],
    answerHistory: []
  };

  componentDidMount() {
    this.setState(prevState => ({
      ...prevState,
      cards: this.getCardsFromDeck(),
      cardsAnswered: [],
      answerHistory: []
    }));
  }

  componentDidUpdate(prevProps, prevState) {
    if(!this.state.showAnswer && prevState.showAnswer) {
      this.setState(prevState => ({
        ...prevState
      }))
    }
  }

  restartQuiz = () => {
    this.setState(prevState => ({
      ...prevState,
      showAnswer: false,
      cards: this.getCardsFromDeck(),
      cardsAnswered: [],
      answerHistory: []
    }));
  };

  getCardsFromDeck = () => {
    const { deckId } = this.props.navigation.state.params;
    const { cards } = this.props;

    return Object.keys(cards).filter(cardId => cards[cardId].deckId === deckId);
  };

  showAnswer = () => {
    this.setState(prevState => ({
      ...prevState,
      showAnswer: true
    }))
  };

  hideQuestion = () => {
    this.setState(prevState => ({
      ...prevState,
      showAnswer: false
    }));
  };

  currentCard = () => {
    const { cards } = this.props;
    const cardsIds = this.state.cards;
    const cardsToAnswer = cardsIds.filter(id => !this.state.cardsAnswered.includes(id));

    return cardsToAnswer.length
      ? cards[cardsToAnswer[0]]
      : null;
  };

  markAsAnswered = (id, answer) => {
    /**
     * Adicionando card na lista de cards respondidos
     */
    this.setState(prevState => ({
      ...prevState,
      showAnswer: false,
      cardsAnswered: prevState.cardsAnswered.concat(id),
      answerHistory: prevState.answerHistory.concat([{
        cardId: id,
        answer
      }])
    }));
  }

  getScore = () => {
    const amountQuestions = this.state.answerHistory.length;
    const correctAnswers = this.state.answerHistory.filter(history => history.answer).length;

    return `${correctAnswers}/${amountQuestions}`;
  };

  saveHistory = () => {
    const { deckId } = this.props.navigation.state.params;

    this.props.handleAddHistory(deckId, this.state.answerHistory);
  };

  render() {

    const currentCard = this.currentCard();

    return (
      <Fragment>
        <Header navigation={this.props.navigation}/>
        <View style={styles.view}>
        {
          currentCard && <Text style={styles.questionsLeft}>Quiz: {`${this.state.cardsAnswered.length + 1}/${this.state.cards.length}`}
          </Text>
        }
        {
          /**
           * Exibir perguntas enquanto existir os cards
           */
          currentCard
            ? this.state.showAnswer
              ? <QuizAnswer
                  card={currentCard}
                  markAsAnswered={this.markAsAnswered}
                />
              : <QuizQuestion
                  card={currentCard}
                  showAnswer={this.showAnswer}
                />
            : <QuizResult
                navigation={this.props.navigation}
                saveHistory={this.saveHistory}
                restartQuiz={this.restartQuiz}
                score={this.getScore()}
              />
        }
        </View>
      </Fragment>
    );
  }
}

function mapStateToProps({cards}) {
  return {
    cards
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleAddHistory: (deckId, answerHistory) => dispatch(handleAddHistory(deckId, answerHistory))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizContentScreen);

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'space-between',
    width: '100%'
  },
  questionsLeft: {
    textAlign: 'right',
    marginRight: 20,
    marginTop: 20
  }
});
