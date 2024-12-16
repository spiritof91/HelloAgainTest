import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootNavigator from '@navigation/RootNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const App = () => {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
