import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { Button } from 'react-native-elements';
import { defaultBorderColor, darkColor } from '../utils/helpers';

export default class QuizAnswer extends Component {

  state = {
    bounceValue: new Animated.Value(1),
  };

  componentDidMount() {
    const { bounceValue } = this.state;

    Animated.sequence([
      Animated.timing(bounceValue, { duration: 200, toValue: 2.5}),
      Animated.spring(bounceValue, { toValue: 1.5, friction: 4})
    ]).start();
  }

  render() {
    const { answer, id } = this.props.card;
    const { bounceValue } = this.state;

    return (
      <Fragment>
        <View style={styles.card}>
          <Animated.Text style={[styles.textContent, {transform: [{scale: bounceValue}]}]}>{answer}</Animated.Text>
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
    width: '50%',
    textAlign: 'center'
  }
});
