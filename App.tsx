import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import { Provider } from 'react-redux';
import { TailwindProvider } from 'tailwindcss-react-native';
import { colors } from './src/constants';
import Navigation from './src/navigator/Navigation';
import { store } from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <TailwindProvider>
        <SafeAreaView className='flex-1'>
          <StatusBar backgroundColor={colors.main}/>
          
            <NavigationContainer>
              <Navigation/>
            </NavigationContainer>
          
        </SafeAreaView>
      </TailwindProvider>
    </Provider>
  );
}
