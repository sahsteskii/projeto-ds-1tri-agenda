import { Tabs } from 'expo-router';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.6)',
        headerShown: false,
        tabBarButton: HapticTab,
        // ESTAS LINHAS ABAIXO DEFINEM A COR AZUL
        tabBarStyle: {
          backgroundColor: '#1E67BD', // Azul do seu cabeçalho
          borderTopWidth: 0,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Login',
          tabBarIcon: ({ color }) => <MaterialIcons name="login" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="datas"
        options={{
          title: 'Datas',
          tabBarIcon: ({ color }) => <AntDesign name="schedule" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="horarios"
        options={{
          title: 'Horários',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="clock" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="faleconosco"
        options={{
          title: 'Fale Conosco',
          tabBarIcon: ({ color }) => <AntDesign name="phone" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}