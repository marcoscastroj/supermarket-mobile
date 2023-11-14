import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NavigationBar: React.FC = () => {
  const navigation = useNavigation();

  const handleHomePress = () => {
    navigation.navigate('Home' as never);
  };

  const handleCartPress = () => {
    navigation.navigate('Cart' as never);
  };

  const handleCreateUserPress = () => {
    navigation.navigate('CreateUser' as never);
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
      <TouchableOpacity onPress={handleHomePress}>
        <Text>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleCartPress}>
        <Text>Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleCreateUserPress}>
        <Text>Create User</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavigationBar;

