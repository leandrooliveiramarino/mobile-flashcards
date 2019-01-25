import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { defaultBorderColor, darkColor } from '../utils/helpers';
import Header from './Header';

export default class QuizScreen extends Component {

  goTo = screen => this.props.navigation.navigate(screen);

  render() {
    return (
      <Fragment>
        <Header navigation={this.props.navigation}/>
        <View style={styles.view}>
          <Text style={styles.title}>React Native</Text>
          <View>
            <Button
              large
              icon={{name: 'plus', type: 'font-awesome'}}
              title='Add New Question'
              buttonStyle={styles.btnSubmit}
              onPress={() => this.goTo('CreateQuizQuestionScreen')}
            />
            <Button
              large
              icon={{name: 'play', type: 'font-awesome'}}
              title='Start a Quiz'
              buttonStyle={styles.btnSubmit}
              onPress={() => this.goTo('QuizQuestionScreen')}
            />
          </View>
        </View>
        <Text style={styles.amountCardsLeft}>15 cards</Text>
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
  title: {
    marginTop: 50,
    textAlign: 'center',
    fontSize: 50,
    color: darkColor
  },
  btnSubmit: {
    marginBottom: 20,
    backgroundColor: darkColor,
    borderRadius: 5
  },
  amountCardsLeft: {
    textAlign: 'right',
    marginTop: 15,
    marginBottom: 20,
    marginRight: 20,
    alignSelf: 'flex-end',
    fontSize: 20,
    color: darkColor
  }
});
