import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HelloPage from '../helloPage/HelloPage';
import SignInPage from '../signInPage/SignInPage';
import SignUpPage from '../signUpPage/SignUpPage';
import ToDoListPage from '../toDoListPage/ToDoListPage';

import navOptions from './AppNavigatorStyle';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HelloPage"
        component={HelloPage}
        options={navOptions.helloPageHeader}
      />
      <Stack.Screen
        name="SignIn"
        options={navOptions.signInHeader}
        component={SignInPage}
      />
      <Stack.Screen
        name="SignUp"
        options={navOptions.signUpHeader}
        component={SignUpPage}
      />
      <Stack.Screen
        name="ToDoList"
        component={ToDoListPage}
        options={navOptions.toDoListHeader}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
