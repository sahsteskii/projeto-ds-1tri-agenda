import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  FlatList,
  StatusBar,
  Dimensions
} from 'react-native';

const { width } = Dimensions.get('window');

// Gerando os dados com segurança
const DATA = Array.from({ length: 31 }, (_, i) => {
  const day = (i + 1).toString().padStart(2, '0');
  return { id: day.toString(), label: `${day}/04` };
});

// Componente de Botão com verificação de erro no label
// Se for arquivo .js (JavaScript comum)
const DateButton = ({ label = "--/--" }) => { 
  return (
    <TouchableOpacity 
      style={styles.button} 
      activeOpacity={0.7}
      onPress={() => console.log("Clicou em:", label)}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default function CalendarScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#D3D3D3" />

      <View style={styles.header}>
        <Text style={styles.title}>Datas disponíveis</Text>
        <Text style={styles.subtitle}>janeiro</Text>
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

      <TouchableOpacity style={styles.footer} activeOpacity={0.8}>
        <Text style={styles.footerText}>Fale conosco</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    paddingTop: 60, // Espaço para não bater no topo (substituto do SafeAreaView)
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
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
    // Se não tiver fonte específica instalada, o sistema usa a padrão italic
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