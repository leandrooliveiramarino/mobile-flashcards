import React, { Fragment } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements'

export default function DeckList() {
  return (
    <Fragment>
      <View>
        <Text>Menu</Text>
      </View>
      <FlatList
        data={[{key: 'a'}, {key: 'b'}]}
        horizontal={false}
        numColumns={2}
        renderItem={({item}) => (
          <Card title="React Native" containerStyle={styles.card}>
            <View style={styles.user}>
              <Text style={styles.name}>Leandro</Text>
            </View>
          </Card>
        )}
        ListEmptyComponent={ <Text>No decks found 😓</Text> }
      />
    </Fragment>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 200,
    borderColor: '#512da8',
    borderRadius: 5,
    marginTop: 30
  }
});