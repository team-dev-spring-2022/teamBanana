import React, {useState} from 'react';
import {TouchableOpacity, TextInput, View, Text} from 'react-native';
import styles from './SignInPageStyle';

const SignInPage = ({navigation}) => {
  const [login, onChangeLogin] = useState(null);
  const [password, onChangePassword] = useState(null);

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
        onPress={() => navigation.navigate('ToDoList')}>
        <Text style={styles.text}>Войти</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.signUpButton, styles.button]}>
        <Text style={styles.textSignUp}>Забыли пароль?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInPage;
