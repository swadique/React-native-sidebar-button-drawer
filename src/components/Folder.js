import React from 'react';
import {StyleSheet, Image, FlatList} from 'react-native';
import images from './images';

function Folder() {
  return (
    <FlatList
      data={images.reverse()}
      renderItem={({item, index}) => (
        <Image source={item} style={styles.image} key={index} />
      )}
      contentContainerStyle={styles.container}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    marginVertical: 16,
  },
});
export default Folder;
