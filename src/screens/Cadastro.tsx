import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import { Text, View, Button } from 'react-native';
import {styles} from '../styles/styles';

export default function Cadastro({navigation}: {navigation: any}) {
  const [fontLoaded] = useFonts({
    BebasNeue_400Regular
  });
  if (!fontLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
    </View>
  )
}
