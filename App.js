
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import 'react-native-gesture-handler'
import Navigation from './src/navigation'

const App: () => React$Node = () => {
  return (
    <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
          <Navigation />
        </SafeAreaView>
    </>
  );
};



export default App