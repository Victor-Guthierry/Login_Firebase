import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Image, TextInput, TouchableOpacity, Touchable } from 'react-native';

export default function editarContato({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={{marginRight: 240,fontWeight: 'bold', fontSize: 20,}}>Nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
      />

      <Text style={{marginRight: 240,fontWeight: 'bold', fontSize: 20,}}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
      />

      <Text style={{marginRight: 213,fontWeight: 'bold', fontSize: 20,}}>Telefone</Text>
      <TextInput
        style={styles.input} 
        placeholder="Digite seu telefone"
      />

      <TouchableOpacity    
        style={{
          width: 300,
          height: 42,
          backgroundColor: '#3498db',
          marginTop: 10,
          borderRadius: 4,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>Alterar</Text>
      </TouchableOpacity>

      <TouchableOpacity    
        style={{
          width: 300,
          height: 42,
          backgroundColor: '#d50000',
          marginTop: 10,
          borderRadius: 4,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3e5f5',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        marginTop: 10,
        padding: 10,
        width: 300,
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 3
    }
});