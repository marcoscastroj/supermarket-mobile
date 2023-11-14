import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import CreateUserScreen from '../screens/CreateUserScreen';

export type ParamListBase = {
  Home: undefined;
  Cart: {
    cart: Array<{
      id: number;
      name: string;
      price: number;
    }>;
    removeFromCart: (id: number) => void;
  };
  CreateUser: undefined; 
};

const Stack = createStackNavigator<ParamListBase>();

const StackNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          headerTitleAlign: 'center',
          headerLeft: () => {
            if (route.name === 'Home') {
              return (
                <MaterialIcons
                  name="menu"
                  size={24}
                  color="black"
                  style={{ marginLeft: 10 }}
                />
              );
            }
            return null;
          },
          headerRight: () => {
            if (route.name === 'Home') {
              return (
                <MaterialIcons
                  name="shopping-cart"
                  size={24}
                  color="black"
                  style={{ marginRight: 10 }}
                />
              );
            } else if (route.name === 'CreateUser') {
              return null;
            }
            return null;
          },
        })}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="CreateUser"
          component={CreateUserScreen} 
          options={{ title: 'Criar Nova Conta' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
