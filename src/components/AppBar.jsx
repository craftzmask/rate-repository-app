import { View, StyleSheet, Pressable } from 'react-native';
import { Link } from 'react-router-native';

import Constants from 'expo-constants';

import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    padding: theme.container.padding,
    paddingTop: Constants.statusBarHeight + theme.container.padding,
    backgroundColor: theme.colors.textPrimary,
    flexDirection: 'row',
    columnGap: 40
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab text='Repositories' to='/' />
      <AppBarTab text='Sign in' to='/signin' />
    </View>
  );
};

export default AppBar;