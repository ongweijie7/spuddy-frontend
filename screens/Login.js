import { useState } from 'react';
import { View, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { Text } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';

const Login = ({ navigation }) => {
  const [username, setusername] = useState('');
  const nextScreen = () => {
    if (!username) {
      navigation.push('LanguageSelection', { username: 'Guest' });
    } else {
      navigation.push('LanguageSelection', { username });
    }
  }

  return (
    <LinearGradient
      colors={['#FF6B6B', '#736EFE']} // Same gradient as previous pages
      style={styles.gradient}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.title}>What is your name?</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            placeholderTextColor="#000"
            onChangeText={setusername}
            value={username}
          />
          <TouchableOpacity style={styles.button} onPress={() => nextScreen()}>
            <Text style={styles.buttonText}>Let's Begin!</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 30, // Adjust the line height to ensure proper spacing
  },
  input: {
    backgroundColor: '#F8E1E7', // Slightly off-white color
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 10,
    width: '80%',
    textAlign: 'center',
    fontSize: 18,
    color: '#000', // Black text
  },
  button: {
    backgroundColor: 'white', // Green color for the button
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'rgb(86, 193, 40)',
  },
});

export default Login;
