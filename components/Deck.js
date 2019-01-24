import React from 'react';
import { Card, ListItem, Button } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native';
import { darkColor } from '../utils/helpers';

export default function Deck() {
  return (
    <Card title='React Native' containerStyle={styles.card} titleStyle={styles.cardTitle}>
      <View style={styles.deckBody}>
        <Text style={{fontSize: 80, color: darkColor}}>R</Text>
        <Text style={styles.amountCards}>15 cards</Text>
      </View>
    </Card>
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