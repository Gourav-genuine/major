import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import Input from './src/screens/Input';
import Output from './src/screens/Output';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Input" component={Input} />
        <Stack.Screen
          name="Output"
          component={Output}
          initialParams={{item: 'Default Output'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
