import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import './index.css';

import client from './graphql/client';
import SearchForm from './components/SearchForm';
import SearchList from './components/SearchList';
import { SearchRepositoriesQuery, SearchRepositoriesQueryVariables } from './generated/graphql'

const INITIAL_STATE: SearchRepositoriesQueryVariables = {
  first: 5,
  after: null,
  last: null,
  before: null,
  query: 'フロントエンドエンジニア',
};

const App: React.FC = () => {
  const [state, setState ] = useState(INITIAL_STATE);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      query: event.target.value,
    });
  };

  return (
    <ApolloProvider client={client}>
      <SearchForm
        value={state.query}
        onChange={handleOnChange}
      />
      <SearchList
        first={state.first}
        after={state.after}
        last={state.last}
        before={state.before}
        query={state.query}
      />
    </ApolloProvider>
  );
};

export default App;
