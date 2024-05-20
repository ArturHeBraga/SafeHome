import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import {styles} from '../styles/styles';

export default function Login({navigation}: {navigation: any}) {
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
      <View style={styles.loginContainer}>
        <Text style={styles.titleLogin}>LOGIN</Text>
        <TextInput style={styles.inputLogin} placeholder="Email" />
        <TextInput style={styles.inputLogin} placeholder="Senha" />
        <TouchableOpacity style={styles.buttonLogin} onPress={() => {navigation.navigate('Tab')}}>
          <Text>Logar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
