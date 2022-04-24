/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {TouchableOpacity, TextInput, View, Text} from 'react-native';
import styles from './SignInPageStyle';
import {useMutation} from '@apollo/client';
import {AUTH} from '../apollo/gqls/mutations';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignInPage = ({navigation}) => {
  const [login, onChangeLogin] = useState('');
  const [password, onChangePassword] = useState('');

  const [passErr, setPassErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);

  const validate = () => {
    if (login === '') {
      console.log('Не введен Email');
      setEmailErr(true);
      return false;
    }
    setEmailErr(false);
    if (password === '') {
      console.log('Не введен пароль');
      setPassErr(true);
      return false;
    }
    setPassErr(false);
    return true;
  };

  const [authorization] = useMutation(AUTH, {
    onCompleted: async ({loginUser}) => {
      console.log('Authorization OK');
      await AsyncStorage.setItem('email', loginUser.email);
      await AsyncStorage.setItem('token', loginUser.token);

      navigation.navigate('ToDoList', {
        email: loginUser.email,
      });
    },
    onError: ({message}) => {
      console.log(message);
      if (message === 'Incorrect password') {
        return null;
      }
    },
  });

  const onAuthorization = () => {
    if (validate()) {
      authorization({
        variables: {email: login, password: password},
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={onChangeLogin}
          value={login}
          placeholder="Email"
          style={[
            styles.inputText,
            styles.text,
            emailErr ? {backgroundColor: '#f68379'} : undefined,
          ]}
        />

        <TextInput
          onChangeText={onChangePassword}
          value={password}
          placeholder="Пароль"
          style={[
            styles.inputText,
            styles.text,
            passErr ? {backgroundColor: '#f68379'} : undefined,
          ]}
        />
      </View>
      <TouchableOpacity
        style={[styles.signInButton, styles.button]}
        onPress={onAuthorization}>
        <Text style={styles.text}>Войти</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.signUpButton, styles.button]}
        onPress={() => navigation.navigate('RecoveryPage')}>
        <Text style={styles.textSignUp}>Забыли пароль?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInPage;
