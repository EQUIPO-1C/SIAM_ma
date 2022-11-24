/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';



import Navigation from './src/navigation'
import { BottomTab } from './src/navigation/BottomTab';
import ScheduleScreen from './src/screens/ScheduleScreen';
const client2 = new ApolloClient({
  uri: 'http://192.168.10.3:80/graphql',
  cache: new InMemoryCache()
});
const App= Node = ({navigation}) => {


  return (
   //<SafeAreaView style={styles.root}>
    //<Navigation/>
   //</SafeAreaView>
      <ApolloProvider client ={client2}>
        <NavigationContainer>
          <BottomTab/>
        </NavigationContainer>
        
      </ApolloProvider>

  );
};

const styles = StyleSheet.create({
  root:{
  flex:1,
  backgroundColor: '#FFFFFF'
  },
});

export default App;
