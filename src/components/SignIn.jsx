import { View, Pressable, StyleSheet } from 'react-native';
import * as yup from 'yup';
import { Formik } from 'formik';

import FormikTextInput from './FormikTextInput';
import Text from './Text'

import theme from '../theme'

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required')
});

const SignInForm = ({ onSubmit }) => {
  const styles = StyleSheet.create({
    form: {
      rowGap: 15,
      backgroundColor: 'white',
      padding: theme.container.padding,
    },
    button: {
      alignSelf: 'stretch',
      padding: 15,
      backgroundColor: theme.colors.primary,
      borderRadius: theme.border.radius
    },
    textButton: {
      textAlign: 'center',
      color: 'white'
    }
  })

  return (
    <View style={styles.form}>
      <FormikTextInput
        name='username'
        placeholder='Username'
      />
      <FormikTextInput
        name='password'
        placeholder='Password'
        secureTextEntry
      />
      <Pressable onPress={onSubmit} style={styles.button}>
        <Text style={styles.textButton}>Sign In</Text>
      </Pressable>
    </View>
  )
};

const initialValues = {
  username: '',
  password: ''
}

const SignIn = () => {
  const onSubmit = values => {
    console.log(values)
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default SignIn;