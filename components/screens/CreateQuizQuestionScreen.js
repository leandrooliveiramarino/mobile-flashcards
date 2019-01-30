import React, { Component, Fragment } from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import { darkColor, defaultBorderColor } from '../../utils/helpers';
import Header from '../Header';
import { handleAddCard } from '../../actions/cards.js';
import { connect } from 'react-redux';
import ReactNavigation from 'react-navigation';
import PropTypes from 'prop-types';

class CreateQuizQuestionScreen extends Component {

  static propTypes = {
    handleAddCard: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired
  };

  state = {
    question: {
      value: '',
      startedTyping: false
    },
    answer: {
      value: '',
      startedTyping: false
    }
  };

  handleTextChange = (input, field) => {
    this.setState(prevState => ({
      ...prevState,
      [field]: {
        startedTyping: true,
        value: input
      }
    }));
  };

  handleSubmit = () => {

    let notValidFields = [];

    Object.keys(this.state).forEach(field => {
      if(!this.state[field].value) {
        notValidFields.push(field);
        this.setState(prevState => ({
          ...prevState,
          [field]: {
            ...prevState[field],
            startedTyping: true
          }
        }));
      }
    });

    if(notValidFields.length) {
      return;
    }

    this.props.handleAddCard({
      question: this.state.question.value,
      answer: this.state.answer.value,
      deckId: this.props.navigation.state.params.deckId
    });

    this.setState({
      question: {
        value: '',
        startedTyping: false
      },
      answer: {
        value: '',
        startedTyping: false
      }
    });
  };

  render() {
    return (
      <Fragment>
        <Header navigation={this.props.navigation}/>
          <KeyboardAvoidingView
            behavior='padding'
            keyboardVerticalOffset={ReactNavigation.Header.HEIGHT}
            style={styles.view}
          >
          <View style={styles.form}>
            <FormLabel>Question</FormLabel>
            <FormInput
              maxLength={50}
              minLength={1}
              onChangeText={input => {
                this.handleTextChange(input, 'question');
              }}
              inputStyle={{borderBottomWidth: 1, borderBottomColor: defaultBorderColor}}
            />
            {
              !this.state.question.value
                && this.state.question.startedTyping
                && <FormValidationMessage>This field must have between 1 and 50 characters</FormValidationMessage>
            }
            <FormLabel>Answer</FormLabel>
            <FormInput
              maxLength={50}
              minLength={1}
              onChangeText={input => {
                this.handleTextChange(input, 'answer');
              }}
              inputStyle={{borderBottomWidth: 1, borderBottomColor: defaultBorderColor}}
            />
            {
              !this.state.answer.value
                && this.state.answer.startedTyping
                && <FormValidationMessage>This field must have between 1 and 50 characters</FormValidationMessage>
            }
          </View>
          <Button
            large
            icon={{name: 'check', type: 'font-awesome'}}
            title='CREATE QUESTION'
            buttonStyle={styles.btnSubmit}
            onPress={() => {
              this.handleSubmit();
              this.props.navigation.goBack();
            }}
          />
        </KeyboardAvoidingView>
      </Fragment>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleAddCard: card => dispatch(handleAddCard(card))
  };
}

export default connect(null, mapDispatchToProps)(CreateQuizQuestionScreen);

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
