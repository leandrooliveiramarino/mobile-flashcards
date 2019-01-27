import React, { Component, Fragment } from 'react';
import { View, StyleSheet } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import { defaultBorderColor, darkColor } from '../utils/helpers';
import { handleAddDeck } from '../actions/decks.js';
import { connect } from 'react-redux';

class DeckCreation extends Component {

  state = {
    title: '',
    startedTyping: false
  }

  handleTextChange = input => {
    this.setState(prevState => ({
      ...prevState,
      startedTyping: true,
      title: input
    }))
  }

  handleSubmit = () => {
    if(!this.state.title) {
      this.setState(prevState => ({
        ...prevState,
        startedTyping: true
      }));
      return;
    }
    this.props.handleAddDeck(this.state.title);
    this.setState({
      title: '',
      startedTyping: false
    });
  }

  render() {
    return (
      <Fragment>
        <View style={styles.view}>
          <View style={styles.form}>
            <FormLabel>Deck Name</FormLabel>
            <FormInput
              onChangeText={this.handleTextChange}
              value={this.state.title}
              inputStyle={{borderBottomWidth: 1, borderBottomColor: '#cecece'}}
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
              /**
               * Apenas redireciona o usuário para a outra aba se o title estiver preenchido
               */
              this.state.title && this.props.navigation.navigate('DeckList');
              this.handleSubmit();
            }}
          />
        </View>
      </Fragment>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleAddDeck: (title) => dispatch(handleAddDeck(title))
  }
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
