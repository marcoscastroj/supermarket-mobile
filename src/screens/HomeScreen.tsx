import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

const HomeScreen: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: '1', name: 'Produto 1', price: 19.99, imageUrl: 'https://media.istockphoto.com/id/1125257743/pt/foto/set-of-liquids-for-cleaning-and-washing-in-multi-colored-bottles-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=gokCYXHL8lNemhZXGN9hHLU8xC5TVwQRbnORvAZzu2M=' },
    { id: '2', name: 'Produto 2', price: 29.99, imageUrl: 'https://media.istockphoto.com/id/1125257743/pt/foto/set-of-liquids-for-cleaning-and-washing-in-multi-colored-bottles-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=gokCYXHL8lNemhZXGN9hHLU8xC5TVwQRbnORvAZzu2M=' },
    { id: '3', name: 'Produto 3', price: 39.99, imageUrl: 'https://media.istockphoto.com/id/1125257743/pt/foto/set-of-liquids-for-cleaning-and-washing-in-multi-colored-bottles-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=gokCYXHL8lNemhZXGN9hHLU8xC5TVwQRbnORvAZzu2M=' },
    // Adicione mais produtos conforme necessário
  ]);

  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (productId: string) => {
    const selectedProduct = products.find(product => product.id === productId);
    if (selectedProduct) {
      setCart([...cart, { id: selectedProduct.id, name: selectedProduct.name, price: selectedProduct.price, imageUrl: selectedProduct.imageUrl }]);
    }
  };

  const renderProductItem = ({ item }: { item: Product }) => (
    <View style={styles.productContainer}>
      <Image source={{ uri: item.imageUrl }} style={{ width: 150, height: 125 }} />
      <Text>{item.name}</Text>
      <Text>Preço: ${item.price}</Text>
      <TouchableOpacity onPress={() => addToCart(item.id)}>
        <Text style={styles.addToCartText} >Adicionar ao Carrinho</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text> </Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderProductItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center', // Centraliza horizontalmente
  },
  productContainer: {
    marginBottom: 20,
  },
  addToCartText: {
    color: 'blue', // Adiciona a cor azul ao texto
  },
});

export default HomeScreen;
