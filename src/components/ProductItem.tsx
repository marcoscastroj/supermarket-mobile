// ProductItem.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface ProductItemProps {
  name: string;
  price: number;
  onAddToCart: () => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ name, price, onAddToCart }) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>${price.toFixed(2)}</Text>
      <TouchableOpacity onPress={onAddToCart}>
        <Text>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductItem;
