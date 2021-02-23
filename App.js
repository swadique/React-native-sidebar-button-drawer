/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Folder from './src/components/Folder';
import Graph from './src/components/Graph';
import Home from './src/components/Home';
import NotFound from './src/components/NotFound';
import Sidebar from './src/components/Sidebar';
import NavigationContext from './src/contexts/navigationContext';
const App = () => {
  const [state, setState] = useState(0);
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
          {
            {
              0: <Home />,
              1: <Folder />,
              2: <Graph />,
              3: <NotFound />,
              4: <NotFound />,
              5: <NotFound />,
              6: <NotFound />,
              7: <NotFound />,
            }[state]
          }
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
