// App.tsx
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import CartScreen from './src/screens/CartScreen';
import CreateUserScreen from './src/screens/CreateUserScreen';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const CartStack = createStackNavigator();
const LoginStack = createStackNavigator();

const App: React.FC = () => {
  const [users, setUsers] = useState([
    { id: 1, username: 'admin', password: 'admin' },
    // Adicione mais usuários conforme necessário
  ]);
  const [authenticatedUser, setAuthenticatedUser] = useState(null);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Login">
          {() => <LoginScreen users={users} setAuthenticatedUser={setAuthenticatedUser} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
