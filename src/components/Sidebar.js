import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import SideBarItem from './SideBarItem';
import sideBarIcons from './sideBarIcons';

function Sidebar() {
  return (
    <FlatList
      data={sideBarIcons}
      contentContainerStyle={styles.container}
      renderItem={({item, index}) => <SideBarItem item={item} />}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
});

export default Sidebar;
