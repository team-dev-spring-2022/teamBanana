import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HelloPage from '../helloPage/HelloPage';
import SignInPage from '../signInPage/SignInPage';
import SignUpPage from '../signUpPage/SignUpPage';
import ToDoListPage from '../toDoListPage/ToDoListPage';
import RecoveryPage from '../recoveryPage/recoveryPage';
import CreateTasksPage from '../createTasksPage/CreateTasksPage';
import ChangeTaskPage from '../changeTaskPage/ChangeTaskPage';

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
      <Stack.Screen
        name="RecoveryPage"
        component={RecoveryPage}
        options={navOptions.recoveryHeader}
      />
      <Stack.Screen
        name="CreateTasksPage"
        component={CreateTasksPage}
        options={navOptions.createTaskHeader}
      />
      <Stack.Screen
        name="ChangeTaskPage"
        component={ChangeTaskPage}
        options={navOptions.changeTaskHeader}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
