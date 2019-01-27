import React, { Component } from 'react';
import { defaultTextColor, defaultBorderColor, primaryColor } from '../utils/helpers';
import { Text, View, StyleSheet } from 'react-native';

class SingleItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.title}>
            <Text style={styles.titleLabel}>{this.props.title}</Text>
          </View>
          <View style={styles.subtitleView}>
            <Text style={styles.ratingText}>{this.props.dateAnswered}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.score}>{this.props.score}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 80,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: defaultBorderColor,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  titleLabel: {
    paddingLeft: 15,
    paddingTop: 5,
    fontSize: 18,
    fontWeight: 'bold'
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 15,
    paddingTop: 5
  },
  ratingText: {
    color: primaryColor
  },
  score: {
    paddingRight: 15,
    fontWeight: 'bold',
    fontSize: 15
  }
});

export default SingleItem;