// CreateUserScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CreateUserScreen: React.FC<{ users: any[]; setUsers: React.Dispatch<React.SetStateAction<any[]>> }> = ({ users, setUsers }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const createUser = () => {
    const newUser = { id: users.length + 1, username, password };
    setUsers([...users, newUser]);
    console.log(`Novo usuário criado: ${username}`);
  };

  return (
    <View style={styles.container}>
      <Text>Criar Usuário</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome de usuário"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button title="Criar Usuário" onPress={createUser} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default CreateUserScreen;
