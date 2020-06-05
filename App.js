import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native'

import Routes from './src/routes'

export default function App() {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content"/>
      <Routes />
    </>
  );
}

