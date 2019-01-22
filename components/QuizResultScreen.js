import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import { defaultBorderColor, darkColor } from '../utils/helpers';

export default class QuizResultScreen extends Component {

  someFunction = () => {}

  render() {
    return (
      <Fragment>
        <View style={styles.view}>
          <View style={styles.card}>
            <Text style={styles.textContent}>You've got</Text>
            <Text style={styles.textContent}>13/15</Text>
          </View>
          <Button
            large
            icon={{name: 'refresh', type: 'ionicons'}}
            title='Restart Quiz'
            buttonStyle={styles.btn}
          />
          <Button
            large
            icon={{name: 'arrow-back', type: 'ionicons'}}
            title='Back to Deck'
            buttonStyle={styles.btn}
          />
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'space-between',
    width: '100%'
  },
  questionsLeft: {
    textAlign: 'right',
    marginRight: 20,
    marginTop: 20
  },
  btn: {
    marginBottom: 20,
    backgroundColor: darkColor,
    borderRadius: 5
  },
  card: {
    flex: 1,
    margin: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContent: {
    fontSize: 30,
    textAlign: 'center'
  }
});
