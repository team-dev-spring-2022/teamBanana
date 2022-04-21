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
  mutation CreateTask(
    $text: String
    $createdBy: String
    $checked: Boolean
    $deadline: String
  ) {
    createTask(
      taskInput: {
        text: $text
        createdBy: $createdBy
        checked: $checked
        deadline: $deadline
      }
    ) {
      _id
      text
      createdBy
      checked
      deadline
    }
  }
`;
