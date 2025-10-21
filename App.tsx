import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍦 Ice Cream Loyalty App</Text>
      <Text style={styles.subtitle}>Hello World!</Text>
      <Text style={styles.info}>Your app is running successfully</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 24,
    color: '#666',
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    color: '#999',
  },
});
