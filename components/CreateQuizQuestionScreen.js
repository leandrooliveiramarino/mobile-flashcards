import React, { Component, Fragment } from 'react';
import { View, StyleSheet } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import { defaultBorderColor, darkColor } from '../utils/helpers';
import Header from './Header';

export default class CreateQuizQuestionScreen extends Component {

  someFunction = () => {}

  render() {
    return (
      <Fragment>
        <Header navigation={this.props.navigation}/>
        <View style={styles.view}>
          <View style={styles.form}>
            <FormLabel>Question</FormLabel>
            <FormInput
              onChangeText={this.someFunction}
              inputStyle={{borderBottomWidth: 1, borderBottomColor: '#cecece'}}
            />
            {
              /**
               * <FormValidationMessage>Error message</FormValidationMessage>
               */
            }
            <FormLabel>Answer</FormLabel>
            <FormInput
              onChangeText={this.someFunction}
              inputStyle={{borderBottomWidth: 1, borderBottomColor: '#cecece'}}
            />
            {
              /**
               * <FormValidationMessage>Error message</FormValidationMessage>
               */
            }
          </View>
          <Button
            large
            icon={{name: 'check', type: 'font-awesome'}}
            title='CREATE QUESTION'
            buttonStyle={styles.btnSubmit}
          />
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'space-between'
  },
  form: {
    marginTop: 20
  },
  btnSubmit: {
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: darkColor
  }
});
