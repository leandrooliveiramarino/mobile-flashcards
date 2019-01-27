import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import { defaultBorderColor, darkColor } from '../utils/helpers';

export default class QuizQuestion extends Component {

  render() {
    return (
      <Fragment>
          <View style={styles.card}>
            <Text style={styles.textContent}>{this.props.card.question}</Text>
          </View>
          <Button
            large
            icon={{name: 'eye', type: 'font-awesome'}}
            title='Show Answer'
            buttonStyle={styles.btnShowAnswer}
            onPress={this.props.showAnswer}
          />
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  btnShowAnswer: {
    marginBottom: 20,
    backgroundColor: darkColor,
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
