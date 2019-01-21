import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { primaryColor, defaultTextColor } from '../utils/helpers';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.menuItem}>Decks</Text>
      <Icon iconStyle={styles.menuItem} name='plus-square' type='font-awesome' color='#fff' />
    </View>
  );
}

const styles = StyleSheet.create({
  menuItem: {
    color: defaultTextColor,
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 20,
    marginRight: 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    backgroundColor: primaryColor,
    width: '100%',
    height: 60,
    alignItems: 'center',
    flexWrap: 'wrap',
  }
});