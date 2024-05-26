import React from 'react';
import { View, SafeAreaView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const languages = [
  { name: 'French', flag: '🇫🇷' },
  { name: 'German', flag: '🇩🇪' },
  { name: 'Spanish', flag: '🇪🇸' },
  { name: 'Chinese', flag: '🇨🇳' },
  { name: 'Korean', flag: '🇰🇷' }
];

const LanguageSelection = ({ navigation, route }) => {
  const { username } = route.params
  const onPress = (language) => {
    navigation.push('NativeLanguageSelection', { username, language });
  }

  return (
    <LinearGradient
      colors={['#F76A6A', '#9A4DFF']}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.title}>What language would</Text>
          <Text style={styles.title}>you like to learn?</Text>
          {languages.map((language, index) => (
            <TouchableOpacity key={index} style={styles.languageButton} onPress={() => onPress('CHINESE')}>
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
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  languageButton: {
    backgroundColor: '#F8E1E7',
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
    color: 'black',
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

export default LanguageSelection;