import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {}
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.parrafo}>
          Este es contenido de ejemplo para Home. Puedes hacer scroll si hay mucho contenido.
        </Text>
      </ScrollView>

      {}
      <View style={styles.bottomButtons}>
        <Pressable
          style={styles.button}
          onPress={() => router.push({ pathname: 'detalle', params: { titulo: 'Home' } })}
        >
          <Text style={styles.buttonText}>Ir al Detalle</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  parrafo: { fontSize: 16, marginBottom: 15 },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    backgroundColor: '#4f46e5',
    marginHorizontal: 5,
    height: 45,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});