import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Image, TextInput, TouchableOpacity, Touchable } from 'react-native';
import axios from 'axios';
import {ListItem, Avatar} from 'react-native-elements';

export default function listarContatos({ navigation }) {

  const [dados,setDados] = useState([]);

  useEffect(() => {

    function resgatarDados() {
      axios('http://professornilson.com/testeservico/clientes')
      .then(function (response) {
        setDados(response.data);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    resgatarDados()

  },[])

  return (
    <View>
      <ScrollView>
  {
    dados.map((l, i) => (
      <ListItem key={i} bottomDivider onPress={() => navigation.navigate('EditarContato')}>
        <Avatar source={{uri: 'https://icons-for-free.com/iconfiles/png/512/avatar+person+profile+user+icon-1320166578424287581.png'}} />
        <ListItem.Content>
          <ListItem.Title>{l.nome}</ListItem.Title>
          <ListItem.Subtitle>{l.telefone}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    ))
  }
      </ScrollView>
    </View>
  )

}