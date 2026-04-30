import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView, 
  Linking,
  StatusBar
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function HomeScreen() {
  
  const handleGoogleLogin = () => {
    Linking.openURL('https://accounts.google.com/signin');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#1E67B5" barStyle="light-content" />
      
      {/* Cabeçalho */}
      <View style={styles.header}>
        <MaterialCommunityIcons name="account" size={50} color="#FFF" />
        <Text style={styles.headerTitle}>AGENDAMENTOS</Text>
      </View>

      {/* Conteúdo Principal */}
      <View style={styles.content}>
        <Text style={styles.label}>Fazer login</Text>
        <TextInput 
          style={[styles.input, styles.inputBlue]} 
          placeholder="Digite seu login"
          placeholderTextColor="#DDD"
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput 
          style={[styles.input, styles.inputGrey]} 
          placeholder="Digite sua senha"
          placeholderTextColor="#666"
          secureTextEntry
        />

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
        </TouchableOpacity>

        {/* Botão Google */}
        <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
          <View style={styles.googleIconCircle}>
            <MaterialCommunityIcons name="google" size={24} color="#000" />
          </View>
          <Text style={styles.googleButtonText}>Fazer login com o google</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3', 
  },
  header: {
    backgroundColor: '#1E67B5', 
    height: 120,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  label: {
    fontSize: 18,
    color: '#000',
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    height: 55,
    borderRadius: 30,
    paddingHorizontal: 20,
    fontSize: 16,
    marginBottom: 20,
  },
  inputBlue: {
    backgroundColor: '#1E67B5',
    color: '#FFF',
  },
  inputGrey: {
    backgroundColor: '#A9A9A9',
    color: '#FFF',
  },
  forgotPassword: {
    color: '#1E67B5',
    fontSize: 14,
    marginBottom: 30,
  },
  googleButton: {
    backgroundColor: '#1E67B5',
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    borderRadius: 30,
    paddingHorizontal: 10,
  },
  googleIconCircle: {
    backgroundColor: '#FFF',
    width: 35,
    height: 35,
    borderRadius: 17.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleButtonText: {
    color: '#FFF',
    fontSize: 16,
    marginLeft: 15,
  }
});