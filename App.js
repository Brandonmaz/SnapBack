
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Home from './src/screens/Home'
import AntDesign from 'react-native-vector-icons/AntDesign';

const App: () => React$Node = () => {
  return (
    <>
        <StatusBar style="auto" />
        <SafeAreaView>
          <Home/>
        </SafeAreaView>
    </>
  );
}



export default App