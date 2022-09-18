import Splashscreen from '@components/Splashscreen';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackScreen } from '@routes';
import customTheme from '@theme';
import { NativeBaseProvider, StatusBar } from 'native-base';
import React, { FC, Suspense, useEffect } from 'react';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import SplashScreen from 'react-native-splash-screen';

enableScreens();

const App: FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Suspense fallback={<Splashscreen />}>
      <SafeAreaProvider>
        <NavigationContainer>
          <NativeBaseProvider theme={customTheme}>
            <StatusBar barStyle="dark-content" />
            <RootStackScreen />
          </NativeBaseProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </Suspense>
  );
};

export default App;
