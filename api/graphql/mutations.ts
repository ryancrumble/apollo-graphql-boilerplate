import { gql } from "@apollo/client";

export const SET_EXAMPLE_MUTATION = gql`
  mutation setExample($input: ExampleMutationInput!) {
    setExample(input: $input) {
      id
      username
      email
    }
  }
`;
