import * as React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import AppNavigator from './components/navigation/AppNavigator';

const App = () => {
  return (
    <SafeAreaView style={{height: '100%', backgroundColor: '#767676'}}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
