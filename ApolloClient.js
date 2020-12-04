import { useMemo } from "react";
 import { ApolloClient, createHttpLink, InMemoryCache } from 
 "@apollo/client";
 import jwt from 'jsonwebtoken';
 import { setContext } from '@apollo/client/link/context';

 let apolloClient;

 const httpLink = createHttpLink({
  uri: 'http://localhost:8000/graphql',
});

 function createApolloClient() {
   return new ApolloClient({
     ssrMode: typeof window === "undefined", // set to true for SSR
     link: authLink.concat(httpLink),
     cache: new InMemoryCache(),
   });
 }

 async function getAccessToken() {
  if (localStorage.getItem('accessToken')) {
    let token = localStorage.getItem('accessToken')
    let decoded = jwt.decode(token);
    let timeThreshold = Date.now() + 120000; // Current time plus 2 minutes
    const exp = decoded.exp * 1000;
    if(exp < timeThreshold) {
      console.log('reached here')
      //TODO: Fetch refresh token and generate new access token
    }
    return token;
  } else {
    return null;
  }
}

 const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = await getAccessToken();
  // return the headers to the context so httpLink can read them
  if (token) {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
  } else {
    return {
      headers: {
        ...headers
      }
    }
  }
});

 export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Restore the cache using the data passed from
    // getStaticProps/getServerSideProps combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}

