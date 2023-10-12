import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';

import Text from './Text';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 20,
    paddingBottom: 20,
    backgroundColor: theme.backgroundColors.appBar
  },
  textColor: {
    color: 'white',
    fontWeight: theme.fontWeights.bold
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text style={styles.textColor}>Repositories</Text>
      </Pressable>
    </View>
  );
};

export default AppBar;