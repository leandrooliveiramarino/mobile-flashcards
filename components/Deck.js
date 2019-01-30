import React, { Component } from 'react';
import { Card } from 'react-native-elements';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { darkColor, activeOpacity, alert } from '../utils/helpers';
import { connect } from 'react-redux';
import { handleRemoveDeck } from '../actions/decks';
import PropTypes from 'prop-types';

class Deck extends Component {

  static propTypes = {
    navigation: PropTypes.object.isRequired,
    deck: PropTypes.object.isRequired,
    amountCards: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  render() {
    const { navigation, deck, amountCards, dispatch } = this.props;

    return (
      <TouchableOpacity
        activeOpacity={activeOpacity}
        onPress={() => {
          navigation.navigate('QuizScreen', {deck})
        }}
        onLongPress={() => alert({
          title: 'Remove Deck',
          subtitle: 'Do you really want to remove this item?',
          onPositiveAnswer: () => {
            dispatch(handleRemoveDeck(deck.id));
          }
        })}
      >

        <Card
          title={deck.title}
          containerStyle={styles.card}
          titleStyle={styles.cardTitle}
        >
          <View style={styles.deckBody}>
            <Text style={styles.charAt}>{deck.title.charAt(0)}</Text>
            <Text style={styles.amountCards}>{amountCards} cards</Text>
          </View>
        </Card>
      </TouchableOpacity>
    );
  }
}

export default connect()(Deck);

const styles = StyleSheet.create({
  charAt: {
    fontSize: 80,
    color: darkColor
  },
  card: {
    width: 170,
    height: 230,
    borderColor: darkColor,
    borderRadius: 5,
    margin: 0,
    marginTop: 15,
    marginBottom: 15,
  },
  cardTitle: {
    color: darkColor
  },
  deckBody: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  amountCards: {
    color: darkColor,
    alignSelf: 'flex-end'
  }
});