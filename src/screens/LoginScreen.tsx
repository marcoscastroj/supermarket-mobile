import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const users = [
  { username: 'admin', password: 'admin'}
]

const LoginScreen = () => {
  const navigation = useNavigation();
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  
  const handleLogin = () => {
    const user = users.find(u => u.username === login && u.password === senha);

    if (user) {
      navigation.navigate('Home' as never);
    } else {
      Alert.alert('Erro', 'Usuário ou senha incorretos');
    }
  };

  const handleNavigateToCreateUser = () => {
    navigation.navigate('CreateUser' as never);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={text => setLogin(text)}
        value={login}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setSenha(text)}
        value={senha}
        secureTextEntry
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  loginButton: {
    backgroundColor: '#3498DB',
    padding: 5,
    borderRadius: 5,
    marginTop: 20,
    width: '40%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default LoginScreen;

