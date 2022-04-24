/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {TouchableOpacity, TextInput, View, Text} from 'react-native';
import styles from './SignUpPageStyle';
import {useMutation} from '@apollo/client';
import {REG} from '../apollo/gqls/mutations';

const SignUpPage = ({navigation}) => {
  const [login, onChangeLogin] = useState(null);
  const [email, onChangeEmail] = useState(null);
  const [password, onChangePassword] = useState('');
  const [checkpassword, onChangeCheckPassword] = useState('');
  const [passErr, onChangePassErr] = useState(false);

  const [registration] = useMutation(REG, {
    onCompleted: () => {
      navigation.navigate('HelloPage');
      console.log('registration OK');
    },
  });

  const validate = () => {
    if (password === '') {
      console.log('Не введен пароль');
      onChangePassErr(true);
      return false;
    }
    if (checkpassword === '') {
      console.log('Повторите пароль');
      onChangePassErr(true);
      return false;
    }
    if (password !== checkpassword) {
      console.log('Пароли не совпадают');
      onChangePassErr(true);
      return false;
    }
    onChangePassErr(false);
    return true;
  };

  const onRegistration = () => {
    if (validate()) {
      registration({
        variables: {
          username: login,
          email: email,
          password: password,
        },
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={onChangeLogin}
          value={login}
          placeholder="Логин"
          style={[styles.inputText, styles.text]}
        />

        <TextInput
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Email"
          style={[styles.inputText, styles.text]}
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

        <TextInput
          onChangeText={onChangeCheckPassword}
          value={checkpassword}
          placeholder="Повторите пароль"
          style={[
            styles.inputText,
            styles.text,
            passErr ? {backgroundColor: '#f68379'} : undefined,
          ]}
        />
      </View>

      <TouchableOpacity
        style={[styles.signUpButton, styles.button]}
        onPress={onRegistration}>
        <Text style={styles.text}>Зарегистрироваться</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpPage;
