import React, { Fragment } from 'react';
import { View, Text, FlatList } from 'react-native';
import Deck from './Deck';

export default function DeckList() {
  return (
    <Fragment>
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