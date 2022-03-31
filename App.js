import * as React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloProvider} from '@apollo/client';
import client from './components/apollo/apollo';
import AppNavigator from './components/navigation/AppNavigator';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={{height: '100%', backgroundColor: '#767676'}}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </ApolloProvider>
  );
};

export default App;
