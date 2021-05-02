import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { SEARCH_REPOSITORIES } from '../graphql/query';

const INITIAL_STATE = {
  first: 5,
  after: null,
  last: null,
  before: null,
  query: 'フロントエンドエンジニア',
};

const SearchForm: React.FC = () => {
  const [state, setState] = useState(INITIAL_STATE);
  const { loading, error, data } = useQuery(SEARCH_REPOSITORIES, {
    variables: {
      first: state.first,
      after: state.after,
      last: state.last,
      before: state.before,
      query: state.query,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      query: event.target.value,
    });
  };

  return (
    <>
      <section className="flex flex-col items-center bg-gradient-to-r from-pink-500 to-yellow-500 py-10">
        <h1 className="title-font text-3xl font-medium text-white mb-3">
          GitHub Repository Searcher
        </h1>
        <div className="z-10 bg-white w-1/2 rounded-full mt-2">
          <input
            type="text"
            id="search-field"
            placeholder="Search Repository Name"
            className="w-full bg-gray-100 bg-opacity-50 rounded-full focus:bg-transparent border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            value={state.query}
            onChange={handleOnChange}
          />
        </div>
      </section>
      <ul className="flex flex-col items-center">
        {data.search.edges.map((edge: any) => {
          const node = edge.node;
          return (
            <li
              className="rounded overflow-hidden shadow-lg w-3/4"
              key={node.id}
            >
              <div className="px-6 py-4">
                <p className="font-bold text-xl text-gray-800 my-2">
                  {node.name}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SearchForm;
