import React, { Fragment } from 'react';
import { View, Text, FlatList } from 'react-native';
import Deck from './Deck';

export default function DeckList({navigation}) {
  return (
    <Fragment>
      <FlatList
        style={{padding: 25}}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        data={[{key: 'a'}, {key: 'b'}, {key: 'c'}]}
        horizontal={false}
        numColumns={2}
        renderItem={({item}) => (
          <Deck navigation={navigation}/>
        )}
        ListEmptyComponent={ <Text>No decks found 😓</Text> }
      />
    </Fragment>
  );
}