import React, {useState} from 'react';
import {TouchableOpacity, TextInput, View, Text} from 'react-native';
import styles from './SignInPageStyle';
import {useMutation} from '@apollo/client';
import {AUTH} from '../apollo/gqls/mutations';

const SignInPage = ({navigation}) => {
  const [login, onChangeLogin] = useState(null);
  const [password, onChangePassword] = useState(null);

  const [authorization] = useMutation(AUTH, {
    onCompleted: async ({loginUser}) => {
      console.log('Authorization OK');
      console.log(loginUser._id);
      navigation.navigate('ToDoList');
    },
    onError: ({message}) => {
      console.log(message);
      if (message === 'Incorrect password') {
        return null;
      }
    },
  });

  const onAuthorization = () => {
    authorization({
      variables: {email: login, password: password},
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={onChangeLogin}
          value={login}
          placeholder="Email"
          style={[styles.inputText, styles.text]}
        />

        <TextInput
          onChangeText={onChangePassword}
          value={password}
          placeholder="Пароль"
          style={[styles.inputText, styles.text]}
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
