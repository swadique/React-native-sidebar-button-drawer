import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function NotFound() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Data not found</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  textStyle: {
    fontWeight: 'bold',
    color: '#007FF4',
  },
});
export default NotFound;
