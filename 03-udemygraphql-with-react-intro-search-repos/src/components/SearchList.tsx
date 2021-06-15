import React from 'react';
import {
  useSearchRepositoriesQuery,
  SearchRepositoriesQueryVariables,
} from '../generated/graphql';
import StarButton from './StarButton';

type Props = {
  variables: SearchRepositoriesQueryVariables;
  nextPage: (search: any) => void;
  previousPage: (search: any) => void;
};

const SearchList: React.FC<Props> = ({ variables, nextPage, previousPage }) => {
  const { loading, error, data } = useSearchRepositoriesQuery({
    variables,
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  const search = data?.search;
  const edges = search?.edges;
  return (
    <div>
      <ul className="flex flex-col items-center pt-8">
        {search &&
          edges &&
          edges.map((edge) => {
            if (edge && edge.node) {
              const { id, name, url, stargazers } = { ...edge.node };
              return (
                <li
                  className="flex items-center justify-between rounded overflow-hidden shadow-lg w-3/4 px-6 py-4"
                  key={id}
                >
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-xl text-gray-800 my-2"
                  >
                    {name}
                  </a>
                  <StarButton />
                </li>
              );
            }
          })}
      </ul>
      <div className="flex justify-center pt-10">
        {search?.pageInfo.hasPreviousPage === true ? (
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full"
            onClick={() => previousPage(search)}
          >
            Prev
          </button>
        ) : null}
        {search?.pageInfo.hasNextPage === true ? (
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full ml-10"
            onClick={() => nextPage(search)}
          >
            Next
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default SearchList;
