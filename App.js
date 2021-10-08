import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './auth/Login';
import Home from './view/Home';
import Welcome from './view/Welcome';
import Verification from './auth/Verification';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Welcome" 
          component={Welcome} 
          options={{ headerShown: false }}/>
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ title: 'Login', headerBackTitle: '', headerShown: true }}/>
        <Stack.Screen 
          name="Verification" 
          component={Verification} 
          options={{ title: 'Verification', headerBackTitle: '', headerShown: true }}/>
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ title: 'Home', headerBackTitle: '', headerShown: true }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;