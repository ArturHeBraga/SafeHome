import React, { useState } from 'react';
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import { styles } from '../styles/styles';

export default function Cadastro({ navigation }: { navigation: any }) {
  const [fontLoaded] = useFonts({
    BebasNeue_400Regular
  });

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = async () => {
    try {
      const response = await axios.post('https://localhost:5000/user', {
        nome,
        email,
        senha,
      });

      if (response.status === 201) {
        Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
        navigation.navigate('Tab');
      } else {
        Alert.alert('Erro', 'Houve um problema ao realizar o cadastro.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Houve um problema ao realizar o cadastro.');
    }
  };

  if (!fontLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.titleLogin}>Cadastro</Text>
        <TextInput
          style={styles.inputLogin}
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.inputLogin}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.inputLogin}
          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
        <TouchableOpacity style={styles.buttonLogin} onPress={handleCadastro}>
          <Text>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
