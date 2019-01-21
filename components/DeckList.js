import React, { Fragment } from 'react';
import { View, Text, FlatList } from 'react-native';
import Deck from './Deck';
import Header from './Header';

export default function DeckList() {
  return (
    <Fragment>
      <Header/>
      <FlatList
        data={[{key: 'a'}, {key: 'b'}]}
        horizontal={false}
        numColumns={2}
        renderItem={({item}) => (
          <Deck/>
        )}
        ListEmptyComponent={ <Text>No decks found 😓</Text> }
      />
    </Fragment>
  );
}