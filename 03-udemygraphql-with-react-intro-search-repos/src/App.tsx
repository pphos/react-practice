import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import './index.css';

import client from './graphql/client';
import SearchForm from './components/SearchForm';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <SearchForm />
    </ApolloProvider>
  );
};

export default App;
