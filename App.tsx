import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootNavigator from '@navigation/RootNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from '@app/store';


const App = () => {

  return (
    <SafeAreaProvider>
      <Provider {...{store}}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
