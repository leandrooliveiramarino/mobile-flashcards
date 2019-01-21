import React from 'react';
import { Card, ListItem, Button } from 'react-native-elements';
import { StyleSheet, View, Text } from 'react-native';
import { darkColor } from '../utils/helpers';

export default function Deck() {
  return (
    <Card title="React Native" containerStyle={styles.card}>
      <View style={styles.user}>
        <Text style={styles.name}>Leandro</Text>
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
    marginTop: 30
  }
});