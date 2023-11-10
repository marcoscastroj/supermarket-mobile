import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface ProductItemProps {
  name: string;
  price: number;
  onPress: () => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ name, price, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View>
      <Text>{name}</Text>
      <Text>Price: ${price}</Text>
    </View>
  </TouchableOpacity>
);

export default ProductItem;
