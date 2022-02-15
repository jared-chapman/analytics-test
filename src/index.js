import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Components/Main/Main.js'
import {
  ApolloClient,
  NormalizedCacheObject,
  ApolloProvider,
  gql,
  InMemoryCache
} from '@apollo/client';
import { Cache } from './cache.js';

let cache = new InMemoryCache;


// Initialize ApolloClient
const client = new ApolloClient({
  cache,
  uri: "http://localhost:4000/graphql"
});





  
  
  ReactDOM.render(
    <ApolloProvider client={client}>
      <div>
          <Main />
        
      </div>
      </ApolloProvider>,
    document.getElementById('root')
  );