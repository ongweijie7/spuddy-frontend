import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { UserProvider } from './UserContext.js';
import Chat from './screens/Chat.js';
import Welcome from './screens/Welcome.js';
import LanguageSelection from './screens/LanguageSelection.js';
import NativeLanguageSelection from './screens/NativeLanguageSelection.js';
import Login from './screens/Login.js';

const { Screen, Navigator } = createNativeStackNavigator();

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Navigator>
          <Screen name="Welcome" component={Welcome} options={{ headerShown: false }}/>
          <Screen name="Login" component={Login} options={{ headerShown: false }}/>
          <Screen name="LanguageSelection" component={LanguageSelection} options={{ headerShown: false }}/>
          <Screen name="NativeLanguageSelection" component={NativeLanguageSelection} options={{ headerShown: false }}/>
          <Screen name="Chat" component={Chat} options={{ headerBackTitleVisible: false, title: 'Streak Day 1 🔥' }}/>
        </Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </UserProvider>
  );
}
