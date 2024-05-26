import { useContext } from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Text } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import { UserContext } from '../UserContext.js';
import { createUser } from '../api/UserAPI.js';

const languages = [
  { name: 'French', flag: '🇨🇦' },
  { name: 'English', flag: '🇨🇦' }
];

const NativeLanguageSelection = ({ navigation, route }) => {
  const { setUser} = useContext(UserContext)
  const { username, language } = route.params
  const onPress = async (nativeLanguage) => {
    const retrievedUser = await createUser(username, language, nativeLanguage)
    console.log(retrievedUser)
    setUser(retrievedUser)
    navigation.push('Chat', { username, language, nativeLanguage }); // Change to the appropriate screen
  };

  return (
    <LinearGradient
      colors={['#FF6B6B', '#736EFE']} // Adjust the gradient to match your image
      style={styles.gradient}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.title}>What is your native language?</Text>
          {languages.map((language, index) => (
            <TouchableOpacity key={index} style={styles.languageButton} onPress={() => onPress('ENGLISH')}>
              <Text style={styles.languageText}>{language.flag} {language.name}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.returnButton} onPress={() => navigation.pop()}>
            <Text style={styles.returnButtonText}>←</Text>
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
  languageButton: {
    backgroundColor: '#F8E1E7', // Slightly off-white color
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  languageText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000', // Black text to contrast with the off-white background
  },
  returnButton: {
    // alignSelf: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 50,
    padding: 15,
    marginTop: 30,
  },
  returnButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default NativeLanguageSelection;