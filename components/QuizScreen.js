import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { darkColor } from '../utils/helpers';
import Header from './Header';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class QuizScreen extends Component {

  static propTypes = {
    deck: PropTypes.object.isRequired,
    amountCards: PropTypes.number.isRequired,
    navigation: PropTypes.object.isRequired
  }

  goTo = (screen, options) => this.props.navigation.navigate(screen, options);

  render() {
    const { deck, amountCards } = this.props;

    return (
      <Fragment>
        <Header navigation={this.props.navigation}/>
        <View style={styles.view}>
          <Text style={styles.title}>{deck.title}</Text>
          <View>
            <Button
              large
              icon={{name: 'plus', type: 'font-awesome'}}
              title='Add New Question'
              buttonStyle={styles.btnSubmit}
              onPress={() => this.goTo('CreateQuizQuestionScreen', { deckId: deck.id })}
            />
            {
              !!amountCards && (
                <Button
                  large
                  icon={{name: 'play', type: 'font-awesome'}}
                  title='Start a Quiz'
                  buttonStyle={styles.btnSubmit}
                  onPress={() => this.goTo('QuizContentScreen', { deckId: deck.id })}
                />
              )
            }
          </View>
        </View>
        <Text style={styles.amountCardsLeft}>{amountCards} cards</Text>
      </Fragment>
    );
  }
}

function mapStateToProps({decks, cards}, props) {
  const { deck, amountCards } = props.navigation.state.params;

  return {
    amountCards: Object.keys(cards).filter(cardId => cards[cardId].deckId === deck.id).length,
    deck: deck
  };
}

export default connect(mapStateToProps)(QuizScreen);

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'space-between',
    width: '100%'
  },
  title: {
    marginTop: 50,
    textAlign: 'center',
    fontSize: 50,
    color: darkColor
  },
  btnSubmit: {
    marginBottom: 20,
    backgroundColor: darkColor,
    borderRadius: 5
  },
  amountCardsLeft: {
    textAlign: 'right',
    marginTop: 15,
    marginBottom: 20,
    marginRight: 20,
    alignSelf: 'flex-end',
    fontSize: 20,
    color: darkColor
  }
});
