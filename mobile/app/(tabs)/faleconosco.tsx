import React, { useState } from 'react';
import {
  Alert,
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default function Faleconosco() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleEnviar = () => {
    if (!nome || !email || !mensagem) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos.');
      return;
    }
    Alert.alert('Sucesso', 'Mensagem enviada com sucesso!');
    setNome('');
    setEmail('');
    setMensagem('');
  };

  const handlePhonePress = () => {
    Linking.openURL('tel:+5541984584105');
  };

  const handleEmailPress = () => {
    Linking.openURL('mailto:calendariopr@gmail.com');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Título em azul */}
        <Text style={styles.title}>Fale conosco</Text>

        {/* Contato Telefone com ícone */}
        <TouchableOpacity onPress={handlePhonePress} style={styles.contactItem}>
          <Text style={styles.iconText}>📞</Text>
          <Text style={styles.contactText}>+55 (41) 98458-4105</Text>
        </TouchableOpacity>

        {/* Contato Email com ícone */}
        <TouchableOpacity onPress={handleEmailPress} style={styles.contactItem}>
          <Text style={styles.iconText}>✉️</Text>
          <Text style={styles.contactText}>calendariopr@gmail.com</Text>
        </TouchableOpacity>

        {/* Título do formulário */}
        <Text style={styles.formTitle}>Envie uma mensagem</Text>

        {/* Campo Nome */}
        <TextInput
          style={styles.input}
          placeholder="Seu nome"
          placeholderTextColor="#999"
          value={nome}
          onChangeText={setNome}
        />

        {/* Campo E-mail */}
        <TextInput
          style={styles.input}
          placeholder="Seu e-mail"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        {/* Campo Mensagem */}
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Sua mensagem"
          placeholderTextColor="#999"
          multiline
          numberOfLines={4}
          value={mensagem}
          onChangeText={setMensagem}
        />

        {/* Botão Enviar */}
        <TouchableOpacity style={styles.button} onPress={handleEnviar}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* A barra azul (footerBlue) foi removida daqui */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#005C97', 
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconText: {
    fontSize: 22,
    marginRight: 12,
  },
  contactText: {
    fontSize: 18,
    color: '#000',
    textDecorationLine: 'underline',
  },
  formTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 20,
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 16,
    backgroundColor: '#fff',
    color: '#000',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#005C97',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  
});