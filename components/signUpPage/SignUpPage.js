import React, {useState} from 'react';
import {TouchableOpacity, TextInput, View, Text} from 'react-native';
import styles from './SignUpPageStyle';

const SignUpPage = () => {
  const [login, onChangeLogin] = useState(null);
  const [email, onChangeEmail] = useState(null);
  const [password, onChangePassword] = useState(null);
  const [checkpassword, onChangeCheckPassword] = useState(null);

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
          style={[styles.inputText_2, styles.text]}
        />

        <TextInput
          onChangeText={onChangeCheckPassword}
          value={checkpassword}
          placeholder="Повторите пароль"
          style={[styles.inputText, styles.text]}
        />
      </View>
      <TouchableOpacity style={[styles.signUpButton, styles.button]}>
        <Text style={styles.text}>Зарегистрироваться</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpPage;
