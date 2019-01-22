import React, { Component, Fragment } from 'react';
import { View, StyleSheet } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import { defaultBorderColor } from '../utils/helpers';

export default class DeckCreation extends Component {

  someFunction = () => {}

  render() {
    return (
      <Fragment>
        <View style={styles.view}>
          <View style={styles.form}>
            <FormLabel>Deck Name</FormLabel>
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
            title='CREATE DECK'
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
    borderRadius: 5
  }
});
