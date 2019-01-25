import React from 'react';
import { View, StatusBar } from 'react-native';
import { Constants } from 'expo';
import { primaryColor } from '../utils/helpers';

export default function SystemTopBar({...props}) {
  return (
    <View style={{ backgroundColor: primaryColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={primaryColor} {...props} />
    </View>
  )
}