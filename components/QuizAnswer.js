import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import { defaultBorderColor, darkColor } from '../utils/helpers';

export default class QuizAnswer extends Component {
  render() {
    const { answer, id } = this.props.card;
    return (
      <Fragment>
        <View style={styles.card}>
          <Text style={styles.textContent}>{answer}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Button
            large
            rightIcon={{name: 'thumbsdown', type: 'octicon'}}
            title='Missed it!'
            buttonStyle={styles.btn}
            onPress={() => this.props.markAsAnswered(id, false)}
          />
          <Button
            large
            rightIcon={{name: 'thumbsup', type: 'octicon'}}
            title='Nailed it!'
            buttonStyle={styles.btn}
            onPress={() => this.props.markAsAnswered(id, true)}
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
