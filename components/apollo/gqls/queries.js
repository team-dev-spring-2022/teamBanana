import {gql} from '@apollo/client';

export const FIND_MANY_POST = gql`
  query ($where: TaskWhereInput) {
    findManyTask(where: $where) {
      _id
      createdBy
      text
      checked
      deadline
    }
  }
`;
