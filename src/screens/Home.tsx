import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import {styles} from '../styles/styles';
import React from 'react';

export default function Home({navigation}: {navigation: any}) {
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
      <Image 
        source = {require('../assets/detector.png')}
        style = {styles.homeImage}/>
      <TouchableOpacity onPress={() => {navigation.navigate('Login')}} style={styles.homeButton}> 
        <Text style={styles.textoBotao}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate('Cadastro')}} style={styles.homeButton}> 
        <Text style={styles.textoBotao}>Cadastro</Text>
      </TouchableOpacity>
    </View>
  )
}
