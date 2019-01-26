import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList } from 'react-native';
import Deck from './Deck';
import { handleInitialData } from '../actions/index';

class DeckList extends Component {

  componentDidMount() {
    this.props.handleInitialData();
  }

  amountCards(deckId) {
    return Object
      .keys(this.props.cards)
      .filter(cardId => this.props.cards[cardId].deckId === deckId)
      .length;
  }

  render() {
    const { navigation, decks, cards } = this.props;

    return (
      <Fragment>
        <FlatList
          style={{padding: 25}}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          data={Object.keys(decks)}
          keyExtractor={item => item.id}
          horizontal={false}
          numColumns={2}
          renderItem={({item}) => {
           return (
            <Deck deck={decks[item]} amountCards={this.amountCards(item)}/>
          )
          }}
          ListEmptyComponent={ <Text>No decks found 😓</Text> }
        />
      </Fragment>
    );
  }
}

function mapStateToProps({decks, cards}) {
  return {
    decks,
    cards
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleInitialData: () => dispatch(handleInitialData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);
