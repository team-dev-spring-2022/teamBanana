import React from 'react';
import {Image, TouchableOpacity, View, Text} from 'react-native';
import style from './HelloPageStyle';
// @todo #4 Подключить начальную страницу к навигации
const HelloPage = () => {
  return (
    <View style={style.container}>
      <Image source={require('./logo.png')} style={style.logo} />
      <TouchableOpacity style={[style.signInButton, style.button]}>
        <Text style={style.text}>Войти</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[style.signUpButton, style.button]}>
        <Text style={style.text}>Зарегистрироваться</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HelloPage;
