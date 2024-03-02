import { gql } from "@apollo/client";

const GET_USERS = gql`
  query {
    users {
      data {
        name
        email
        id
      }
    }
  }
`;

const GET_USER = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      name
    }
  }
`;

export {GET_USER,GET_USERS};
