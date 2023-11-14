// CartItem.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface CartItemProps {
  name: string;
  price: number;
  onRemove: () => void;
}

const CartItem: React.FC<CartItemProps> = ({ name, price, onRemove }) => {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>${price.toFixed(2)}</Text>
      <TouchableOpacity onPress={onRemove}>
        <Text>Remove</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default CartItem;
