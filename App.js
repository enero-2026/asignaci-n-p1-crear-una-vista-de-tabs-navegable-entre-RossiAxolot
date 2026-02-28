import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

function Pantalla({ route }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {route.params?.titulo}
      </Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.tabBar,
          tabBarItemStyle: styles.tabItem,
          headerShown: false
        }}
      >
        <Tab.Screen
          name="Inicio"
          component={Pantalla}
          initialParams={{ titulo: "Componente Inicio" }}
        />
        <Tab.Screen
          name="Perfil"
          component={Pantalla}
          initialParams={{ titulo: "Componente Perfil" }}
        />
        <Tab.Screen
          name="Buscar"
          component={Pantalla}
          initialParams={{ titulo: "Componente Buscar" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  tabBar: {
    height: 60,
  },
  tabItem: {
    flex: 1, 
  },
});