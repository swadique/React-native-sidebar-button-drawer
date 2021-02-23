/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useContext, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Sidebar from './src/components/Sidebar';
import NavigationContext from './src/contexts/navigationContext';

const App = () => {
  const [state, setState] = useState('0');
  function setNavigationContext(key) {
    setState(key);
  }
  return (
    <NavigationContext.Provider
      value={{navigationContext: state, setNavigationContext}}>
      <View style={styles.container}>
        <View style={styles.leftContent}>
          <Sidebar />
        </View>
        <View style={styles.rightContent}>
          <Text>Hello</Text>
        </View>
      </View>
    </NavigationContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  leftContent: {
    flex: 1,
    backgroundColor: '#fff',
  },
  rightContent: {
    backgroundColor: '#E5E5E5',
    flex: 4,
  },
});

export default App;
