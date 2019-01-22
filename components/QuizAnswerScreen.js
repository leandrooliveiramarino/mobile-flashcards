import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import { defaultBorderColor, darkColor } from '../utils/helpers';

export default class QuizAnswerScreen extends Component {

  someFunction = () => {}

  render() {
    return (
      <Fragment>
        <View style={styles.view}>
          <Text style={styles.questionsLeft}>Questions left: 14</Text>
          <View style={styles.card}>
            <Text style={styles.textContent}>On React, you should always give preference to mutate data directly to avoid errors and bugs.</Text>
          </View>
          <View style={styles.buttonsContainer}>
            <Button
              large
              rightIcon={{name: 'thumbsdown', type: 'octicon'}}
              title='Missed it!'
              buttonStyle={styles.btn}
            />
            <Button
              large
              rightIcon={{name: 'thumbsup', type: 'octicon'}}
              title='Nailed it!'
              buttonStyle={styles.btn}
            />
          </View>
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
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  btn: {
    marginBottom: 20,
    backgroundColor: darkColor,
    margin: 0,
    borderRadius: 5
  },
  card: {
    flex: 1,
    borderColor: defaultBorderColor,
    borderWidth: 1,
    borderStyle: 'dashed',
    margin: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContent: {
    fontSize: 30,
    padding: 30,
    textAlign: 'center'
  }
});
