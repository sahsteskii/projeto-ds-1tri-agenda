import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  ScrollView, 
  SafeAreaView, 
  Alert 
} from 'react-native';

const App = () => {
  // Criamos as datas de 01 a 30
  const dias = Array.from({ length: 30 }, (_, i) => {
    const dia = i + 1;
    return dia < 10 ? `0${dia}/04` : `${dia}/04`;
  });

  const handlePress = (item) => {
    Alert.alert("Data selecionada", `Você clicou na data: ${item}`);
  };

  const handleContact = () => {
    Alert.alert("Contato", "Redirecionando para o atendimento...");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Datas disponíveis</Text>
        <Text style={styles.subtitle}>janeiro</Text>

        <View style={styles.grid}>
          {dias.map((data, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.button}
              onPress={() => handlePress(data)}
            >
              <Text style={styles.buttonText}>{data}</Text>
            </TouchableOpacity>
          ))}
          
          {/* Botão 31/04 isolado para ficar centralizado embaixo */}
          <View style={styles.fullWidthRow}>
            <TouchableOpacity 
              style={styles.button}
              onPress={() => handlePress("31/04")}
            >
              <Text style={styles.buttonText}>31/04</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Footer transformado em botão */}
      <TouchableOpacity 
        style={styles.footer} 
        activeOpacity={0.7}
        onPress={handleContact}
      >
        <Text style={styles.footerText}>Fale conosco</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#d9d9d9',
  },
  container: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 120, 
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1e67b1',
  },
  subtitle: {
    fontSize: 55,
    fontStyle: 'italic',
    color: '#2b84f3',
    marginTop: -10,
    marginBottom: 20,
    // Se tiver uma fonte cursiva instalada, use: fontFamily: 'NomeDaFonte'
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  button: {
    backgroundColor: '#1e67b1',
    width: '30%', 
    margin: 5,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    // Sombra
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  fullWidthRow: {
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#1e67b1',
    padding: 25,
    alignItems: 'center',
  },
  footerText: {
    color: '#adb5bd',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'none',
  },
});
