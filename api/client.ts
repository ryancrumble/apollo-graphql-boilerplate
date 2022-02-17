import { ApolloClient, InMemoryCache } from "@apollo/client";

import { AUTH_TOKEN_KEY } from "../constants/localStorage";
import { getItem } from "../utils/localStorage";

const initializeClient = () => {
  const uri = process.env.GRAPHQL_ENDPOINT;
  const token = getItem(AUTH_TOKEN_KEY);

  return new ApolloClient({
    uri,
    cache: new InMemoryCache(),
    // Add the authorization token to the headers if needed
    headers: {
      authorization: token ? `Bearer ${token}` : "",
    },
  });
};

/**
 * @description Client for the Apollo GraphQL server
 */
const client = initializeClient();

/**
 * @description Executes a query on the GraphQL server
 * @param options
 * @example
 * const fetchFoo = async () => {
 *   return await query({
 *     query: Queries.GET_FOO_QUERY,
 *  });
 * };
 */
const query = async (options: any) => {
  try {
    const result = await client.query(options);
    if (result.errors) {
      throw new Error(
        `GraphQL execution errors occurred: ${result.errors.join(", ")}`
      );
    }
    return Object.values(result.data)[0];
  } catch (err) {
    console.log(err);
    throw err;
  }
};

/**
 * @description Executes a mutation on the GraphQL server
 * @param options
 * @example
 * const setBar = async (exampleInput: ExampleInput) => {
 *   return await mutate({
 *     mutation: Queries.GET_FOO_QUERY,
 * .   variables: { exampleInput },
 *  });
 * };
 */
const mutate = async (options: any) => {
  try {
    const result = await client.mutate(options);
    if (result.errors) {
      throw new Error(
        `GraphQL execution errors occurred: ${result.errors.join(", ")}`
      );
    }
    return Object.values(result.data)[0];
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export { client, query, mutate };
