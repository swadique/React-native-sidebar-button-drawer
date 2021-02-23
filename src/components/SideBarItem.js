import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import IndicatorIcon from '../assets/icons/IndicatorIcon';
import NavigationContext from '../contexts/navigationContext';

function SideBarItem(props) {
  const {navigationContext, setNavigationContext} = useContext(
    NavigationContext,
  );
  const {Icon, key} = props.item;
  function handleNavigation() {
    setNavigationContext(key);
  }
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleNavigation(key)}>
      <IndicatorIcon
        style={styles.indicator}
        active={key === navigationContext}
      />
      <View style={styles.icon}>
        <Icon active={key === navigationContext} />
      </View>
    </TouchableOpacity>
  );
}

SideBarItem.propTypes = {
  key: PropTypes.string,
  item: PropTypes.object,
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  indicator: {flex: 1},
  icon: {
    alignItems: 'center',
    flex: 5,
    justifyContent: 'center',
  },
});

export default SideBarItem;
