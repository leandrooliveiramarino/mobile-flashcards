import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList } from 'react-native';
import Deck from './Deck';
import { handleInitialData } from '../actions/index';

class DeckList extends Component {

  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    const { navigation, decks } = this.props;

    return (
      <Fragment>
        <FlatList
          style={{padding: 25}}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          data={Object.keys(decks)}
          keyExtractor={item => item.id}
          horizontal={false}
          numColumns={2}
          renderItem={({deckId}) => (
            <Deck key={deckId} {...navigation} deck={decks[deckId]} />
          )}
          ListEmptyComponent={ <Text>No decks found 😓</Text> }
        />
      </Fragment>
    );
  }
}

function mapStateToProps({decks}) {
  return {
    decks
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleInitialData: () => dispatch(handleInitialData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);
