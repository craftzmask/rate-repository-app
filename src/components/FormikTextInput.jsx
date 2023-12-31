import { TextInput, StyleSheet } from 'react-native';
import { useField } from 'formik';

import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  textInput: {
    padding: 15,
    borderWidth: 1,
    borderRadius: theme.border.radius,
  },
  errorTextInput: {
    borderColor: theme.colors.danger
  },
  errorText: {
    color: theme.colors.danger,
    marginTop: -10
  }
});

const FormikTextInput = ({ name, style, ...props }) => {
  const [Field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;
  
  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={Field.value}
        error={showError}
        style={[
          styles.textInput,
          style,
          showError && styles.errorTextInput
        ]}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;