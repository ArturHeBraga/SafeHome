// Cadastro.tsx
import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { auth } from "../services/firebaseConfig"; // Importe auth do arquivo firebaseConfig.ts
import { createUserWithEmailAndPassword } from "firebase/auth";
import { styles } from "../styles/styles";
import CadastroDados from "./CadastroDados";

const Cadastro = ({navigation}: {navigation: any}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Após criar o usuário, navegue para a tela de cadastro de dados adicionais
      navigation.navigate("CadastroDados", { email });

      // Ou você pode adicionar mais informações ao Firestore aqui, se necessário
    } catch (error) {
      Alert.alert("Erro no cadastro", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.titleLogin}>Cadastro</Text>
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
        <TouchableOpacity style={styles.buttonLogin} onPress={handleSignUp}>
          <Text>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cadastro;
