import React from 'react';
import { Card, ListItem, Button } from 'react-native-elements';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { darkColor, activeOpacity } from '../utils/helpers';

export default function Deck({navigation, deck, amountCards}) {
  return (
    <TouchableOpacity activeOpacity={activeOpacity} onPress={() => {
      navigation.navigate('QuizScreen', {deck, amountCards})
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