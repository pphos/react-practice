import React from 'react';
import {
  useSearchRepositoriesQuery,
  SearchRepositoriesQueryVariables
} from '../generated/graphql'

const SearchList: React.FC<SearchRepositoriesQueryVariables> = ({ first, after, last, before, query }) => {
  const { loading, error, data } = useSearchRepositoriesQuery({
    variables: {
      first,
      after,
      last,
      before,
      query,
    }
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <ul className="flex flex-col items-center">
      {data && data.search.edges && data.search.edges.map(edge => {
        if (edge && edge.node) {
          const { id, name } = { ...edge.node };
          return (
            <li className="rounded overflow-hidden shadow-lg w-3/4" key={id}>
              <div className="px-6 py-4">
                <p className="font-bold text-xl text-gray-800 my-2">{name}</p>
              </div>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default SearchList;
