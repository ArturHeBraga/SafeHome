// Login.tsx

import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { auth } from '../services/firebaseConfig'; // Certifique-se de importar corretamente o objeto auth do Firebase
import { signInWithEmailAndPassword } from 'firebase/auth';
import { styles } from '../styles/styles';

const Login = ({navigation}: {navigation: any}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Login bem-sucedido, navegar para a tela de Profile na aba TabRoutes
      navigation.navigate('Tab', { screen: 'Profile' });
      Alert.alert('Login', 'Login bem-sucedido!');
    } catch (error) {
      Alert.alert('Erro no login', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.titleLogin}>LOGIN</Text>
        <TextInput
          style={styles.inputLogin}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.inputLogin}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
          <Text>Logar</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text>Já tem uma conta? Faça o Cadastro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
