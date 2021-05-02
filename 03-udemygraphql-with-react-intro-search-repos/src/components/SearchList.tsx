import React from 'react';

const SAMPLE_LIST = ['Sosage', 'Apple', 'Orange'];

const SearchList: React.FC = () => {
  return (
    <ul className="flex flex-col items-center">
      {SAMPLE_LIST.map((item, index) => {
        return (
          <li className="rounded overflow-hidden shadow-lg w-3/4" key={index}>
            <div className="px-6 py-4">
              <p className="font-bold text-xl text-gray-800 my-2">{item}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchList;
