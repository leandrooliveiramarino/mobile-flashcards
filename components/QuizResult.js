import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { defaultBorderColor, darkColor, clearLocalNotification, setLocalNotification } from '../utils/helpers';
import PropTypes from 'prop-types';

export default class QuizResult extends Component {

  static propTypes = {
    score: PropTypes.string.isRequired,
    restartQuiz: PropTypes.func.isRequired,
    saveHistory: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
    isFinished: PropTypes.bool.isRequired
  };

  componentDidUpdate() {
    /**
     * Se usuário finalizou o quiz, notificá-lo no dia seguinte e não mais no dia corrente
     */
    if(this.props.isFinished) {
      clearLocalNotification();
      setLocalNotification();
    }
  }

  render() {
    return (
      <Fragment>
        <View style={styles.card}>
          <Text style={styles.textContent}>You've got</Text>
          <Text style={styles.textContent}>{this.props.score}</Text>
        </View>
        <Button
          large
          icon={{name: 'refresh', type: 'ionicons'}}
          title='Restart Quiz'
          buttonStyle={styles.btn}
          onPress={() => this.props.restartQuiz()}
        />
        <Button
          large
          icon={{name: 'arrow-back', type: 'ionicons'}}
          title='Back to Deck'
          buttonStyle={styles.btn}
          onPress={() => {
            this.props.saveHistory();
            this.props.navigation.goBack();
          }}
        />
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
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
