import { useRouter } from 'expo-router';
import React from 'react';
import {
  Dimensions,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const { width } = Dimensions.get('window');

const DATA = Array.from({ length: 30 }, (_, i) => {
  const day = (i + 1).toString().padStart(2, '0');
  return { id: day.toString(), label: `${day}/04` };
});

// Componente de Botão atualizado com a navegação
const DateButton = ({ label = "--/--" }) => { 
  const router = useRouter(); // Hook para navegação

  return (
    <TouchableOpacity 
      style={styles.button} 
      activeOpacity={0.7}
      // Redireciona para a pasta/tela agendamento
      onPress={() => router.push('/horarios')} 
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default function CalendarScreen() {
  const router = useRouter();

  const handlePressVoltar = () => {
    if (router.canGoBack()) {
      router.replace('/horarios');
    } else {
      router.replace('/');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#D3D3D3" />

      <View style={styles.header}>
        <TouchableOpacity onPress={handlePressVoltar} style={styles.backBtn}>
           <Text style={styles.backText}>{"< Voltar"}</Text>
        </TouchableOpacity>
        
        <Text style={styles.title}>Datas disponíveis</Text>
        <Text style={styles.subtitle}>Abril</Text>
      </View>

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) => <DateButton label={item.label} />}
        contentContainerStyle={styles.grid}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
      />

      <TouchableOpacity 
        style={styles.footer} 
        activeOpacity={0.8}
        onPress={() => router.back()}
      >
        <Text style={styles.footerText}>Inicio</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    paddingTop: 60,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  backBtn: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  backText: {
    color: '#1E68AD',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2b6cad',
  },
  subtitle: {
    fontSize: 48,
    color: '#3498db',
    fontStyle: 'italic',
    marginTop: -10,
  },
  grid: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#1E68AD',
    borderRadius: 50,
    // Calculo dinâmico para os botões ficarem sempre iguais
    width: (width / 3) - 20, 
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#1E68AD',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    opacity: 0.8,
  },
});