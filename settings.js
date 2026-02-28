import React from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Settings() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {}
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.parrafo}>
          Aquí puedes agregar todo el contenido de Settings. Si es mucho contenido, podrás hacer scroll.
        </Text>
      </ScrollView>

      {}
      <View style={styles.bottomButtons}>
        <Pressable
          style={styles.button}
          onPress={() => router.push({ pathname: 'detalle', params: { titulo: 'Settings' } })}
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