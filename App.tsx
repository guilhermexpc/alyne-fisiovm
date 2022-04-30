import React from 'react';
import { StatusBar as reactStatusBar, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins'
import { ThemeProvider } from 'styled-components/native';

import theme from './src/theme';
import { Routes } from './src/routes';


export default function App() {

  console.log('statusBarHeight: ', reactStatusBar.currentHeight);

  const [fonts] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_300Light
  });

  if (!fonts)
    return <AppLoading />

  return (
    <ThemeProvider theme={theme}>

      <StatusBar style='light' translucent={false} backgroundColor={theme.colors.header} />
      <Routes />
      {/* <View style={{ flex: 1, marginTop: reactStatusBar.currentHeight }}>
      </View> */}
    </ThemeProvider>
  );
}

