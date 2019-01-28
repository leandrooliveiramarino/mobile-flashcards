import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { primaryColor, backgroundColor } from '../utils/helpers';

export default function NotFound({message}) {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  message: {
    fontSize: 25,
    color: primaryColor,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    backgroundColor: backgroundColor
  }
})