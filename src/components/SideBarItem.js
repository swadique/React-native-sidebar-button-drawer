import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import IndicatorIcon from '../assets/icons/IndicatorIcon';
import NavigationContext from '../contexts/navigationContext';

function SideBarItem(props) {
  const {navigationContext, setNavigationContext} = useContext(
    NavigationContext,
  );
  const {Icon, id} = props.item;
  function handleNavigation(itemId) {
    setNavigationContext(itemId);
  }
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleNavigation(id)}>
      <IndicatorIcon
        style={styles.indicator}
        active={id === navigationContext}
      />
      <View style={styles.icon}>
        <Icon active={id === navigationContext} />
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
