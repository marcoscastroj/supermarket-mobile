import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface CartItemProps {
  name: string;
  price: number;
  onRemove: () => void;
}

const CartItem: React.FC<CartItemProps> = ({ name, price, onRemove }) => (
  <View>
    <Text>{name}</Text>
    <Text>Price: ${price}</Text>
    <TouchableOpacity onPress={onRemove}>
      <Text>Remove</Text>
    </TouchableOpacity>
  </View>
);

export default CartItem;
