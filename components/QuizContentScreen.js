import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import { defaultBorderColor, darkColor } from '../utils/helpers';
import SystemTopBar from './SystemTopBar';
import Header from './Header';

export default class QuizContentScreen extends Component {

  someFunction = () => {}

  render() {
    return (
      <Fragment>
        <Header navigation={this.props.navigation}/>
        <View style={styles.view}>

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
  }
});
