import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

const BLUE_COLOR = '#1A62B8'; 

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity style={styles.configIcon}>
          <Icon name="cog" color="white" size={28} />
        </TouchableOpacity>
        
        <View style={styles.perfilInfo}>
          <View style={styles.avatarPlaceholder}>
             <Image 
                source={{ uri: 'https://via.placeholder.com/100' }} 
                style={styles.avatar} 
             />
          </View>
          <Text style={styles.userName}>NOME DE USUÁRIO</Text>
          
          <View style={styles.linhaInfo}>
            <View style={styles.infoBlock}>
              <Text style={styles.infoValue}>200960355</Text>
              <Text style={styles.infoLabel}>código de usuário</Text>
            </View>
            <View style={styles.infoBlock}>
              <Text style={styles.infoValue}>18/09/1988</Text>
              <Text style={styles.infoLabel}>Data de Nascimento</Text>
            </View>
          </View>
        </View>
      </View>

      
      <View style={styles.content}>
        <View style={styles.grid}>
          <MenuButton icon={<Icon name="calendar-check" color="#1F68B2" size={40} />} label="meus agendamentos" />
          <MenuButton icon={<Icon name="calendar" color="#1F68B2" size={40} />} label="calendário" />
          <MenuButton icon={<Icon name="phone-incoming" color="#1F68B2" size={40} />} label="central de atendimento" />
          <MenuButton icon={<Icon name="clock" color="#1F68B2" size={40} />} label="horários disponíveis" />
        </View>
      </View>

      <View style={styles.footer} />
    </SafeAreaView>
  );
}

type MenuButtonProps = {
  icon: React.ReactNode;
  label: string;
};


const MenuButton = ({ icon, label }: MenuButtonProps) => (
  <TouchableOpacity style={styles.card}>
    {icon}
    <Text style={styles.cardText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  header: {
    backgroundColor: BLUE_COLOR,
    height: '45%',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  configIcon: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  perfilInfo: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'white',
    overflow: 'hidden',
    marginBottom: 10,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  userName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  linhaInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  infoBlock: {
    alignItems: 'center',
    flex: 1,
  },
  infoValue: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  infoLabel: {
    color: 'white',
    fontSize: 12,
    opacity: 0.9,
  },
  content: {
    flex: 1,
    marginTop: -40, 
    paddingHorizontal: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: 'white',
    width: '47%',
    aspectRatio: 1, 
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    padding: 15,
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardText: {
    color: BLUE_COLOR,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 14,
  },
  footer: {
    backgroundColor: BLUE_COLOR,
    height: 60,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  }
});