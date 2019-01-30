import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { Button } from 'react-native-elements';
import { defaultBorderColor, darkColor } from '../utils/helpers';
import PropTypes from 'prop-types';

export default class QuizQuestion extends Component {

  static propTypes = {
    card: PropTypes.object.isRequired,
    showAnswer: PropTypes.func.isRequired
  };

  state = {
    bounceValue: new Animated.Value(1),
  };

  componentDidMount() {
    const { bounceValue } = this.state;

    Animated.sequence([
      Animated.timing(bounceValue, { duration: 200, toValue: 2.5 }),
      Animated.spring(bounceValue, { toValue: 1.5, friction: 4 })
    ]).start();
  }

  render() {
    const { question } = this.props.card;
    const { bounceValue } = this.state;

    return (
      <Fragment>
          <View style={styles.card}>
            <Animated.Text
              style={[
                styles.textContent,
                {transform: [{scale: bounceValue}]}
              ]}
            >{question}
            </Animated.Text>
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
    width: '50%',
    textAlign: 'center'
  }
});
