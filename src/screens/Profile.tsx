// Profile.tsx
import React, { useEffect, useState } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/styles';
import { firestore, auth } from '../services/firebaseConfig'; // Importe auth e firestore do arquivo firebaseConfig.ts
import { doc, getDoc } from 'firebase/firestore';

const Profile = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState<any>(null); // Estado para armazenar os dados do usuário
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento dos dados

  // Função para buscar os dados do usuário no Firestore
  const fetchUserData = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const userDocRef = doc(firestore, 'users', user.uid);
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
          setUserData(userDocSnapshot.data()); // Define os dados do usuário no estado
        } else {
          console.log('Documento de usuário não encontrado');
        }
      } else {
        console.log('Usuário não está autenticado');
      }
    } catch (error) {
      console.error('Erro ao buscar dados do usuário:', error);
    } finally {
      setLoading(false); // Marca o carregamento como concluído, independentemente do resultado
    }
  };

  useEffect(() => {
    fetchUserData(); // Executa a busca dos dados do usuário ao carregar o componente
  }, []);

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center' }]}>
        <ActivityIndicator size="large" color="#6959CD" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PROFILE</Text>
      {userData && (
        <View>
          <Text>Email: {userData.email}</Text>
          <Text>CEP: {userData.cep}</Text>
          <Text>Endereço: {userData.endereco}</Text>
          <Text>Cidade: {userData.cidade}</Text>
          <Text>Estado: {userData.estado}</Text>
          <Text>Telefone: {userData.telefone}</Text>
        </View>
      )}
    </View>
  );
};

export default Profile;
