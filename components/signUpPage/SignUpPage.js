import React, {useState} from 'react';
import {TouchableOpacity, TextInput, View, Text} from 'react-native';
import styles from './SignUpPageStyle';
import {useMutation} from '@apollo/client';
import {REG} from '../apollo/gqls/mutations';

const SignUpPage = () => {
  const [login, onChangeLogin] = useState(null);
  const [email, onChangeEmail] = useState(null);
  const [password, onChangePassword] = useState(null);
  const [checkpassword, onChangeCheckPassword] = useState(null);

  const [registration] = useMutation(REG, {
    onCompleted: () => {
      console.log('registration OK');
    },
  });

  const onRegistration = () => {
    registration({
      variables: {
        username: login,
        email: email,
        password: password,
      },
    });
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

       ...
	   
      <TouchableOpacity
        style={[styles.signUpButton, styles.button]}
        onPress={onRegistration}>
        <Text style={styles.text}>Зарегистрироваться</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpPage;