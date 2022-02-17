import { gql } from "@apollo/client";

export const GET_FOO_QUERY = gql`
  query getFooExample {
    getFooExample {
      name
      post {
        id
        title
        description
      }
    }
  }
`;

export const GET_BAR_QUERY = gql`
  query getBarExample($input: ExampleInput!) {
    getBarExample(input: $input) {
      id
      user
    }
  }
`;
