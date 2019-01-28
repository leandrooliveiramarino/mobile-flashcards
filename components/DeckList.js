import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList } from 'react-native';
import Deck from './Deck';
import { handleInitialData } from '../actions/index';
import { filterActiveItems, primaryColor } from '../utils/helpers';
import NotFound from './NotFound';

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
      <FlatList
        style={{paddingLeft: 25, paddingRight: 25}}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        data={Object.keys(decks)}
        keyExtractor={item => item}
        horizontal={false}
        numColumns={2}
        renderItem={({item}) => {
         return (
          <Deck
            key={item}
            deck={decks[item]}
            amountCards={this.amountCards(item)}
            navigation={navigation}
          />
        )
        }}
        ListEmptyComponent={<NotFound message={'No decks found 😧'}/>}
      />
    );
  }
}

function mapStateToProps({decks, cards}) {
  return {
    decks: filterActiveItems(decks),
    cards
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleInitialData: () => dispatch(handleInitialData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);
