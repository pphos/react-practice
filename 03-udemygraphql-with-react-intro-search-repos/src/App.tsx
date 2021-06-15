import React, { useState } from 'react';

import SearchForm from './components/SearchForm';
import SearchList from './components/SearchList';
import { SearchRepositoriesQueryVariables } from './generated/graphql';

const INITIAL_STATE: SearchRepositoriesQueryVariables = {
  first: 5,
  after: null,
  last: null,
  before: null,
  query: 'フロントエンドエンジニア',
};

const App: React.FC = () => {
  const [state, setState] = useState(INITIAL_STATE);

  const handleOnChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      query: event.target.value,
    });
  };

  const handleOnNextPagenation = (search: any) => {
    setState({
      ...state,
      first: 5,
      after: search.pageInfo.endCursor,
      last: null,
      before: null,
    });
  };

  const handleOnPreviousPagenation = (search: any) => {
    setState({
      ...state,
      first: null,
      after: null,
      last: 5,
      before: search.pageInfo.startCursor,
    });
  };

  return (
    <>
      <SearchForm value={state.query} onChange={handleOnChangeQuery} />
      <SearchList
        variables={state}
        nextPage={handleOnNextPagenation}
        previousPage={handleOnPreviousPagenation}
      />
    </>
  );
};

export default App;
