import {gql} from '@apollo/client';

export const AUTH = gql`
  mutation LoginUser($email: String, $password: String) {
    loginUser(loginInput: {email: $email, password: $password}) {
      _id
      username
      email
      token
    }
  }
`;

export const REG = gql`
  mutation RegisterUser($username: String, $email: String, $password: String) {
    registerUser(
      registerInput: {username: $username, email: $email, password: $password}
    ) {
      _id
      username
      email
      token
    }
  }
`;

export const ADD_TASK = gql`
  mutation CreateTask2($task: TaskInput) {
    createTask(taskInput: $task) {
      _id
      text
      createdBy
      checked
      deadline
    }
  }
`;

export const UPD_TASK = gql`
  mutation UpdateTask($id: ID!, $task: TaskInput) {
    updateTask(id: $id, taskInput: $task) {
      _id
      text
      createdBy
      checked
      deadline
    }
  }
`;

export const DEL_TASK = gql`
  mutation RemoveTask($id: ID!) {
    removeTask(id: $id) {
      _id
      text
      createdBy
      checked
      deadline
    }
  }
`;
