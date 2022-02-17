import { mutate, query } from "./client";
import * as Queries from "./graphql/queries";
import * as Mutations from "./graphql/mutations";

export const fetchFoo = async () => {
  return await query({
    query: Queries.GET_FOO_QUERY,
    fetchPolicy: "no-cache",
  });
};

export const fetchBar = async () => {
  return await query({
    query: Queries.GET_BAR_QUERY,
  });
};

export const setExample = async (exampleInput: any) => {
  return await mutate({
    mutation: Mutations.SET_EXAMPLE_MUTATION,
    variables: { exampleInput },
  });
};
