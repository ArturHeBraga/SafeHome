// Arquivo de configuração de rotas (Routes.tsx)
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Feed from '../screens/Feed';
import Cadastro from '../screens/Cadastro';
import CadastroDados from '../screens/CadastroDados';
import Profile from '../screens/Profile';
import { Image } from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Feed' component={Feed} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
  );
}

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Cadastro' component={Cadastro} />
      <Stack.Screen name='CadastroDados' component={CadastroDados} />
      <Stack.Screen name='Tab' component={TabRoutes} />
    </Stack.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
