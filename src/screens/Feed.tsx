import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import { Image, View, } from 'react-native';
import {styles} from '../styles/styles';
import React from 'react';

export default function Feed() {
  const [fontLoaded] = useFonts({
    BebasNeue_400Regular
  });
  if (!fontLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      />
    </View>
  )
}

