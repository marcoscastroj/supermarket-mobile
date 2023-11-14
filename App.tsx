// App.tsx

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import CartScreen from './src/screens/CartScreen';
import LoginScreen from './src/screens/LoginScreen';
import CreateUserScreen from './src/screens/CreateUserScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const App: React.FC = () => {
  const [cart, setCart] = useState<string[]>([]);

  const addToCart = (productId: string) => {
    setCart((prevCart: string[]) => [...prevCart, productId]);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
        />
        <Tab.Screen
          name="Login"
          component={LoginScreen}
        />
                <Tab.Screen
          name="New"
          component={CreateUserScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
