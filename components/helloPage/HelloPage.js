import React from 'react';
import {Image, TouchableOpacity, View, Text} from 'react-native';
import style from './HelloPageStyle';

const HelloPage = ({navigation}) => {
  return (
    <View style={style.container}>
      <Image source={require('./logo.png')} style={style.logo} />

      <TouchableOpacity
        style={[style.signInButton, style.button]}
        onPress={() => navigation.navigate('SignIn')}>
        <Text style={style.text}>Войти</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[style.signUpButton, style.button]}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={style.text}>Зарегистрироваться</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HelloPage;
