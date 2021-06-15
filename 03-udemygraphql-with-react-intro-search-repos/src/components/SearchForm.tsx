import React from 'react';

type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchForm: React.FC<Props> = ({ value, onChange }) => {
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
            value={value}
            onChange={onChange}
          />
        </div>
      </section>
    </>
  );
};

export default SearchForm;
