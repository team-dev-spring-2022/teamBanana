import {gql} from '@apollo/client';

export const AUTH = gql`
  mutation LoginUser($email: String, $password: String) {
    loginUser(loginInput: {email: $email, password: $password}) {
      username
      email
      token
    }
  }
`;
