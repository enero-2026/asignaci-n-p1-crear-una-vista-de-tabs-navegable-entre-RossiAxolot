
import { View, Text } from 'react-native';
import { useSearchParams } from 'expo-router';

export default function Detalle() {
  const { titulo } = useSearchParams();

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text style={{ fontSize: 28 }}>Detalle de: {titulo}</Text>
    </View>
  );
}