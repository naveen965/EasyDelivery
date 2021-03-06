import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/auth/Login';
import Home from './src/view/Home';
import Welcome from './src/view/Welcome';
import Verification from './src/auth/Verification';

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
          options={{ title: 'Login', headerBackTitle: '', headerShown: false }}/>
        <Stack.Screen 
          name="Verification" 
          component={Verification} 
          options={{ title: 'Verification', headerBackTitle: '', headerShown: false }}/>
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ title: 'Home', headerBackTitle: '', headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;