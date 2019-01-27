import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import { defaultBorderColor, darkColor } from '../utils/helpers';
import SystemTopBar from './SystemTopBar';
import Header from './Header';
import QuizQuestion from './QuizQuestion';
import QuizAnswer from './QuizAnswer';
import QuizResult from './QuizResult';
import { connect } from 'react-redux';

class QuizContentScreen extends Component {

  state = {
    showAnswer: false,
    cardsAnswered: [],
    cards: [],
    answerHistory: []
  }

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
  }

  getCardsFromDeck = () => {
    const { deckId } = this.props.navigation.state.params;
    const { cards } = this.props;

    return Object.keys(cards).filter(cardId => cards[cardId].deckId === deckId);
  }

  showAnswer = () => {
    this.setState(prevState => ({
      ...prevState,
      showAnswer: true
    }))
  }

  hideQuestion = () => {
    this.setState(prevState => ({
      ...prevState,
      showAnswer: false
    }))
  }

  currentCard = () => {
    const { cards } = this.props;
    const cardsIds = this.state.cards;
    const cardsToAnswer = cardsIds.filter(id => !this.state.cardsAnswered.includes(id));

    return cardsToAnswer.length
      ? cards[cardsToAnswer[0]]
      : null;
  }

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

  saveHistory = () => {
    /**
     * TODO: Salvar histórico de respostas do usuário
     */
    // this.props.dispatch(saveHistory(this.state.answerHistory))
    console.log(this.state.answerHistory);
  }

  render() {

    const currentCard = this.currentCard();

    return (
      <Fragment>
        <Header navigation={this.props.navigation}/>
        <View style={styles.view}>
        {
          currentCard && <Text style={styles.questionsLeft}>Questions left: {this.state.cards.length - this.state.cardsAnswered.length}</Text>
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
  }
}

export default connect(mapStateToProps)(QuizContentScreen);

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
