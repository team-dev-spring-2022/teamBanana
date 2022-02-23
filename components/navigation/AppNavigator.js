import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HelloPage from '../helloPage/HelloPage';
import SignInPage from '../signInPage/SignInPage';
import SignUpPage from '../signUpPage/SignUpPage';
import ToDoListPage from '../toDoListPage/ToDoListPage';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HelloPage"
        component={HelloPage}
        options={{headerShown: false}}
      />
      <Stack.Screen name="SignIn" component={SignInPage} />
      <Stack.Screen name="SignUp" component={SignUpPage} />
      <Stack.Screen
        name="ToDoList"
        component={ToDoListPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
