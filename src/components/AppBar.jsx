import { View, StyleSheet, ScrollView } from 'react-native';

import Constants from 'expo-constants';

import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    padding: theme.container.padding,
    paddingTop: Constants.statusBarHeight + theme.container.padding,
    backgroundColor: theme.colors.textPrimary,
  },
  scrollView: {
    columnGap: 40
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollView}
        showsHorizontalScrollIndicator={false}
      >
        <AppBarTab text='Repositories' to='/' />
        <AppBarTab text='Sign in' to='/signin' />
      </ScrollView>
    </View>
  );
};

export default AppBar;