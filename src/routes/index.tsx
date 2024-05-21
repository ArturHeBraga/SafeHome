import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Feed from '../screens/Feed';
import Cadastro from '../screens/Cadastro';
import New from '../screens/New';
import Profile from '../screens/Profile';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name='Monitoramento' component={New}
            options={{
                tabBarIcon: () =>(
                    <Image source={require('../assets/quality-control.png')} 
                    style={{width: 30, height: 30}}/>
                )
            }}/>  
            <Tab.Screen name='Sensor' component={Feed}
            options={{
                tabBarIcon: () =>(
                    <Image source={require('../assets/sensor.png')} 
                    style={{width: 32, height: 32}}/>
                )
            }}
            />  
            <Tab.Screen name='Profile' component={Profile}
            options={{
                tabBarIcon: () =>(
                    <Image source={require('../assets/user.png')} 
                    style={{width: 32, height: 32}}/>
                )
            }}/>       
        </Tab.Navigator>
    )
}
export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'
            screenOptions={{
                headerTitle:'',
                headerShown:false,
            }}
            >
                <Stack.Screen name="Home" 
                component={Home}
                />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Cadastro" component={Cadastro} />
                <Stack.Screen name="Tab" component={TabRoutes} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}