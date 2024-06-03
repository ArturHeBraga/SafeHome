// CadastroDados.tsx
import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from "../styles/styles";
import { firestore } from "../services/firebaseConfig"; // Importe firestore do arquivo firebaseConfig.ts
import { collection, addDoc } from "firebase/firestore";

const CadastroDados = ({ navigation }: { navigation: any }) => {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleCadastro = async () => {
    try {
      // Salvar os dados no Firestore
      const docRef = await addDoc(collection(firestore, "users"), {
        cep,
        endereco,
        cidade,
        estado,
        telefone,
      });
      docRef;
      // Navegar para a tela de Profile após o cadastro bem-sucedido
      navigation.navigate("Profile" as never);
    } catch (error) {
      Alert.alert("Erro no cadastro", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.titleLogin}>Cadastro de Dados</Text>
        <TextInput
          style={styles.inputLogin}
          placeholder="CEP"
          value={cep}
          onChangeText={setCep}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.inputLogin}
          placeholder="Endereço"
          value={endereco}
          onChangeText={setEndereco}
        />
        <TextInput
          style={styles.inputLogin}
          placeholder="Cidade"
          value={cidade}
          onChangeText={setCidade}
        />
        <TextInput
          style={styles.inputLogin}
          placeholder="Estado"
          value={estado}
          onChangeText={setEstado}
        />
        <TextInput
          style={styles.inputLogin}
          placeholder="Telefone"
          value={telefone}
          onChangeText={setTelefone}
          keyboardType="phone-pad"
        />
        <TouchableOpacity style={styles.buttonLogin} onPress={handleCadastro}>
          <Text>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CadastroDados;
