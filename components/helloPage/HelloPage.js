import React, {useState, useEffect} from 'react';
import {Image, TouchableOpacity, View, Text} from 'react-native';
import style from './HelloPageStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HelloPage = ({navigation}) => {
  const [email, setEmail] = useState('null');
  const [token, setToken] = useState('null');

  useEffect(() => {
    const dataFromStore = async () => {
      setEmail((await AsyncStorage.getItem('email')) || 'null');
      setToken((await AsyncStorage.getItem('token')) || 'null');
    };
    dataFromStore();
  }, []);

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
