import React, { Component } from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import { darkColor, generateUID } from '../utils/helpers';
import { handleAddDeck } from '../actions/decks.js';
import { connect } from 'react-redux';
import { Header } from 'react-navigation';
import PropTypes from 'prop-types';

class DeckCreation extends Component {

  static propTypes = {
    handleAddDeck: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired
  };

  state = {
    title: '',
    startedTyping: false
  };

  handleTextChange = input => {
    this.setState(prevState => ({
      ...prevState,
      startedTyping: true,
      title: input
    }));
  };

  handleSubmit = () => {
    const id = generateUID();

    if(!this.state.title) {
      this.setState(prevState => ({
        ...prevState,
        startedTyping: true
      }));
      return;
    }

    const deck = {
      id,
      title: this.state.title
    };

    this.props.handleAddDeck(deck);
    this.setState({
      title: '',
      startedTyping: false
    });

    return deck;
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior='padding'
        keyboardVerticalOffset={Header.HEIGHT + 20}
        style={styles.view}
      >
        <View style={styles.form}>
          <FormLabel>Deck Name</FormLabel>
          <FormInput
            onChangeText={this.handleTextChange}
            value={this.state.title}
            inputStyle={{borderBottomWidth: 1, borderBottomColor: '#cecece'}}
            maxLength={15}
          />
          {
            !this.state.title
              && this.state.startedTyping
              && <FormValidationMessage>The deck name must have at least one character</FormValidationMessage>
          }
        </View>
        <Button
          large
          icon={{name: 'check', type: 'font-awesome'}}
          title='CREATE DECK'
          buttonStyle={styles.btnSubmit}
          onPress={() => {
            const deck = this.handleSubmit();
            /**
             * Apenas redireciona o usuário para a outra aba se o title estiver preenchido
             */
            this.state.title && this.props.navigation.navigate('QuizScreen', { deck });
          }}
        />
      </KeyboardAvoidingView>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleAddDeck: title => dispatch(handleAddDeck(title))
  };
}

export default connect(null, mapDispatchToProps)(DeckCreation);

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
