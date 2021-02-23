import React from 'react';
import {View, StyleSheet} from 'react-native';
import SideBarItem from './SideBarItem';
import sideBarIcons from './sideBarIcons';

function Sidebar() {
  return (
    <View style={styles.container}>
      {sideBarIcons.map((item, index) => (
        <SideBarItem item={item} />
      ))}
      {/* <SideBarItem /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',

    flex: 1,
  },
});

export default Sidebar;
