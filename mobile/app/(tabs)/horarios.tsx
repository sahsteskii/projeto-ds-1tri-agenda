import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, TouchableOpacity, Platform } from 'react-native';

// Componente individual para cada Card de Horário
const HorarioCard = ({ horario, corInicialEscura }: { horario: string, corInicialEscura: boolean }) => {
  // Estado para controlar se o card está no modo "dark" ou "light"
  const [isDark, setIsDark] = useState(corInicialEscura);

  const toggleCor = () => {
    setIsDark(!isDark); // Inverte o estado ao clicar
  };

  return (
    <TouchableOpacity 
      activeOpacity={0.7}
      onPress={toggleCor}
      style={[
        styles.card, 
        isDark ? styles.cardDark : styles.cardLight
      ]}
    >
      <Text style={styles.cardText}>{horario}</Text>
    </TouchableOpacity>
  );
};

export default function HomeScreen() {
  // Definimos quais horários começam escuros e quais começam claros com base na sua imagem
  const dadosHorarios = [
    { hora: '7:30', dark: false }, { hora: '8:50', dark: false }, { hora: '9:30', dark: true },
    { hora: '11:50', dark: true }, { hora: '12:30', dark: true }, { hora: '13:50', dark: false },
    { hora: '14:30', dark: true }, { hora: '15:50', dark: false }, { hora: '16:30', dark: true },
    { hora: '17:50', dark: true }, { hora: '18:30', dark: true }, { hora: '19:50', dark: true },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.headerContainer}>
          <Text style={styles.subtitleBackground}>disponíveis</Text>
          <Text style={styles.titleForeground}>horários</Text>
        </View>

        <View style={styles.grid}>
          {dadosHorarios.map((item, index) => (
            <HorarioCard 
              key={index} 
              horario={item.hora} 
              corInicialEscura={item.dark} 
            />
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D1D1D1',
  },
  scrollContent: {
    alignItems: 'center',
    paddingVertical: 60,
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    height: 80,
    width: '100%',
  },
  titleForeground: {
    fontSize: 42,
    fontWeight: '900',
    color: '#1A62A8',
    position: 'absolute',
    zIndex: 2,
  },
  subtitleBackground: {
    fontSize: 58,
    fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
    fontStyle: 'italic',
    color: '#A8C9EE',
    opacity: 0.7,
    position: 'absolute',
    zIndex: 1,
    top: -10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
    paddingHorizontal: 20,
  },
  card: {
    width: '28%', 
    aspectRatio: 1.8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cardLight: {
    backgroundColor: '#A8C9EE', // Azul claro
  },
  cardDark: {
    backgroundColor: '#1A62A8', // Azul escuro
  },
  cardText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});