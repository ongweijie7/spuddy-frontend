import { View, StyleSheet, Image } from 'react-native';
import { Text, Button } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';

const Welcome = ({ navigation }) => {
  const onPress = () => {
    navigation.push('Login');
  }
  return (
  <LinearGradient
      colors={['#FFA07A', '#FF8C00']}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Text h2 h2Style={styles.h2}>Welcome to</Text>
        <Text h1 h1Style={styles.h1}>Spuddi</Text>
        <Text h4 h4Style={styles.h4}>Your personal AI chat buddy</Text>
        <Button size="md" buttonStyle={styles.button} onPress={onPress}>Let's Go!</Button>
        <Image 
            source={require('../assets/SpuddyWelcome.png')} // Updated path to the penguin image
            style={styles.penguin}
            resizeMode="contain"
          />
      </View>
    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // backgroundColor: 'rgb(255, 152, 0)', // Same orange background
  },
  gradient: {
    flex: 1,
  },
  h1: {
    margin: 10,
    fontWeight: 800,
    color: 'white'
  },
  h2: {
    margin: 10,
    fontWeight: 800,
    color: 'white'
  },
  h4: {
    marginVertical: 30,
    fontWeight: 600,
    fontSize: 20,
    color: 'white'
  },
  button: {
    color: '#42a5f5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  penguin: {
    width: 5000, // Adjust the size as needed
    height: 220, // Adjust the size as needed
    aspectRatio: 1,
    position: 'absolute',
    bottom: 0,
  },
})

export default Welcome;