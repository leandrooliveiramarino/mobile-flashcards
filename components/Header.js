import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { primaryColor, defaultTextColor, activeOpacity } from '../utils/helpers';

export default function Header({navigation}) {
  return (
    <View style={styles.header}>
      <TouchableOpacity activeOpacity={activeOpacity} onPress={() => navigation.goBack()}>
        <Icon iconStyle={styles.menuItem} name='chevron-left' type='font-awesome' color='#fff' />
      </TouchableOpacity>
      {
        /**
         * <Text style={styles.menuItem}>Decks</Text>
      <Icon iconStyle={styles.menuItem} name='plus-square' type='font-awesome' color='#fff' />
         */
      }
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
    height: 54,
    alignItems: 'center',
    flexWrap: 'wrap',
  }
});