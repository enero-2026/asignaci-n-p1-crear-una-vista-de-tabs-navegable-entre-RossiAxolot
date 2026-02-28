import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,       
        tabBarStyle: { 
          height: 60,
          flexDirection: 'row',   
          justifyContent: 'space-around',
          alignItems: 'center',
        },
        tabBarLabelStyle: {
          fontSize: 16,
        },
        tabBarItemStyle: {
          flex: 1,                
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}
    >
      <Tabs.Screen name="home" options={{ title: 'Home' }} />
      <Tabs.Screen name="perfil" options={{ title: 'Perfil' }} />
      <Tabs.Screen name="settings" options={{ title: 'Settings' }} />
    </Tabs>
  );
}