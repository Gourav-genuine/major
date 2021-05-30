import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

// Components

import Home from './src/screens/Home';
import Input from './src/screens/Input';
import Output from './src/screens/Output';
import Createdfields from './src/screens/Createdfields';
import SelectedtextInput from './src/components/SelectedtextInput';
import AccountScreen from './src/screens/AccountScreen';

// Create instance
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const CreateScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Input" component={Input} />
    </Stack.Navigator>
  );
};

const HomeScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Createdfields" component={Createdfields} />
      <Stack.Screen name="SelectedInput" component={SelectedtextInput} />
      <Stack.Screen
        name="Output"
        component={Output}
        initialParams={{item: 'Default Output'}}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color}) => {
            let iconName;

            if (route.name === 'MainHome') {
              iconName = 'home';
            } else if (route.name === 'Create') {
              iconName = 'plus-circle';
            } else if (route.name === 'Account') {
              iconName = 'user';
            }

            // You can return any component that you like here!
            return (
              <View>
                <Feather name={iconName} color={color} size={32} />
              </View>
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: '#2e0547',
          inactiveTintColor: '#b19bbf',
        }}>
        <Tab.Screen name="MainHome" component={HomeScreen} />
        <Tab.Screen name="Create" component={CreateScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
