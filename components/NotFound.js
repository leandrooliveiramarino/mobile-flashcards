import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { primaryColor, backgroundColor } from '../utils/helpers';
import PropTypes from 'prop-types';

const NotFound = ({message}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

NotFound.propTypes = {
  message: PropTypes.string.isRequired
};

export default NotFound;

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