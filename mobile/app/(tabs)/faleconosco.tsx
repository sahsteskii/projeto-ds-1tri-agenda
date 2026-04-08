import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Linking,
  Alert,
} from 'react-native';

export default function FaleConosco() {
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
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Título */}
        <Text style={styles.title}>Fale conosco</Text>

        {/* Informações de Contato */}
        <TouchableOpacity style={styles.contactCard} onPress={handlePhonePress}>
          <Text style={styles.contactIcon}>📞</Text>
          <Text style={styles.contactText}>+55 (41) 98458-4105</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactCard} onPress={handleEmailPress}>
          <Text style={styles.contactIcon}>✉️</Text>
          <Text style={styles.contactText}>calendariopr@gmail.com</Text>
        </TouchableOpacity>

        {/* Formulário */}
        <View style={styles.form}>
          <Text style={styles.formTitle}>Envie uma mensagem</Text>
          
          <Text style={styles.label}>Seu nome</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="#999"
            value={nome}
            onChangeText={setNome}
          />
          
          <Text style={styles.label}>Seu e-mail</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="#999"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          
          <Text style={styles.label}>Sua mensagem</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholderTextColor="#999"
            multiline
            numberOfLines={4}
            value={mensagem}
            onChangeText={setMensagem}
          />
          
          <TouchableOpacity style={styles.button} onPress={handleEnviar}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation AZUL */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Explore</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
          <Text style={[styles.navText, styles.activeNavText]}>aiuda</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>datas</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    marginHorizontal: 20,
    marginVertical: 8,
    padding: 14,
    borderRadius: 8,
  },
  contactIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  contactText: {
    fontSize: 16,
    color: 'white',
    flex: 1,
  },
  form: {
    marginHorizontal: 20,
    marginTop: 24,
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    padding: 16,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#aaa',
    marginBottom: 6,
    marginTop: 8,
  },
  input: {
    backgroundColor: '#2a2a2a',
    borderRadius: 6,
    padding: 12,
    color: 'white',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 6,
    padding: 14,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  // Rodapé AZUL
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#0066CC', // Azul principal
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  activeNavItem: {
    // Item ativo pode ter estilo adicional se quiser
  },
  navText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 14,
    fontWeight: '500',
  },
  activeNavText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});