import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, FlatList, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const HomeScreen = () => {
  const navigation = useNavigation();

  const [cart, setCart] = useState<Product[]>([]);
  const [promoCode, setPromoCode] = useState('');
  const promoDiscount = 0.1; 

  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: 'TV 4k Samsung', price: 5200.00, imageUrl: 'https://i.zst.com.br/thumbs/12/20/2f/1549560277.jpg' },
    { id: 2, name: 'PlayStation 5', price: 2999.99, imageUrl: 'https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$' },
    { id: 3, name: 'iPhone 15', price: 3500.00, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6PdD4EfF-0CYJjRTFWyEbs9uB2f2KNSENuQ&usqp=CAU' },
  ]);

  const getTotalPrice = () => {
    const subtotal = cart.reduce((total, product) => total + product.price, 0);
    const discount = promoCode === 'DESM10' ? subtotal * promoDiscount : 0;
    return subtotal - discount;
  };

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  const renderProductItem = ({ item }: { item: Product }) => (
    <TouchableOpacity style={styles.productContainer} onPress={() => addToCart(item)}>
      <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>R$ {item.price.toFixed(2)}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProductItem}
        contentContainerStyle={styles.productList}
        numColumns={2}
      />

      {cart.length > 0 && (
        <View style={styles.cartContainer}>
          <Text style={styles.totalText}>R$ {getTotalPrice().toFixed(2)}</Text>
          <TextInput
            style={styles.promoInput}
            placeholder="Código Promocional"
            onChangeText={(text) => setPromoCode(text)}
            value={promoCode}
          />
            <Text style={styles.cartButtonText}>Ver Carrinho</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  productList: {
    padding: 10,
  },
  productContainer: {
    flex: 1,
    margin: 5,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 5,
    paddingHorizontal: 10,
    color: '#333',
  },
  productPrice: {
    fontSize: 12,
    marginBottom: 5,
    paddingHorizontal: 10,
    color: '#555',
  },
  cartContainer: {
    backgroundColor: '#0000CD',
    padding: 15,
    borderRadius: 10,
    marginVertical: 15,
    marginHorizontal: 15,
  },
  totalText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  promoInput: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  cartButton: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  cartButtonText: {
    color: '#3498db',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
