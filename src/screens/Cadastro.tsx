import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import { Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
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
      <View style={styles.loginContainer}>
        <Text style={styles.titleLogin}>Cadastro</Text>
        <TextInput style={styles.inputLogin} placeholder="Nome" />
        <TextInput style={styles.inputLogin} placeholder="Email" />
        <TextInput style={styles.inputLogin} placeholder="Senha" />
        <TouchableOpacity style={styles.buttonLogin} onPress={() => {navigation.navigate('Tab')}}>
          <Text>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
