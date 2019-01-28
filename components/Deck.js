import React, { Component } from 'react';
import { Card, ListItem, Button } from 'react-native-elements';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { darkColor, activeOpacity } from '../utils/helpers';
import { connect } from 'react-redux';

class Deck extends Component {
  render() {
    const {navigation, deck, amountCards} = this.props;

    return (
      <TouchableOpacity activeOpacity={activeOpacity} onPress={() => {
        navigation.navigate('QuizScreen', {deck})
      }}>
        <Card title={deck.title} containerStyle={styles.card} titleStyle={styles.cardTitle}>
          <View style={styles.deckBody}>
            <Text style={{fontSize: 80, color: darkColor}}>{deck.title.charAt(0)}</Text>
            <Text style={styles.amountCards}>{amountCards} cards</Text>
          </View>
        </Card>
      </TouchableOpacity>
    );
  }
}

export default connect()(Deck);

const styles = StyleSheet.create({
  card: {
    width: 170,
    height: 230,
    borderColor: darkColor,
    borderRadius: 5,
    margin: 0,
    marginTop: 30,
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