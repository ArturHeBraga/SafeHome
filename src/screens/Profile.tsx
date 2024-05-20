import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import { StyleSheet, Text, View } from 'react-native';
import {styles} from '../styles/styles';

export default function Profile() {
  const [fontLoaded] = useFonts({
    BebasNeue_400Regular
  });
  if (!fontLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PROFILE</Text>
    </View>
  );
}
