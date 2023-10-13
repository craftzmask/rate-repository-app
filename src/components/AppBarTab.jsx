import {  StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

import Text from './Text';

import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontWeight: theme.fontWeights.bold
  }
})

const AppBarTab = ({ text, to }) => {
  return (
    <Link to={to}>
      <Text style={styles.text}>{text}</Text>
    </Link>
  );
};

export default AppBarTab;