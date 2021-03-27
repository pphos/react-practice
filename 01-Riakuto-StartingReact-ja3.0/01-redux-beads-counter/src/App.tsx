import React, { useState } from 'react';

const BULK_UNIT = 10;
const BEADS_COLORS = [
  'gray',
  'red',
  'yellow',
  'green',
  'blue',
  'indigo',
  'purple',
  'pink'
];

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const add = (amount: number) => {
    setCount(count => count + amount);
  }
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="container mx-auto mt-10">
      <div className="flex">
        <div className="p-4 md:w-1/3 mx-auto">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg">
            <div className="flex flex-col items-center">
              <h1 className="title-font text-2xl font-medium text-gray-600">
                ビーズカウンター
              </h1>
              <p className="font-medium text-6xl text-gray-800 mb-3">
                {count}
              </p>
            </div>
            <div className="grid grid-cols-2 px-3">
              <button
                className="text-white bg-red-500 rounded text-lg focus:outline-none hover:bg-red-700 p-2"
                onClick={decrement}
              >-1</button>
              <button
                className="text-white bg-green-500 rounded text-lg focus:outline-none hover:bg-green-700"
                onClick={increment}>+1</button>
              <button
                className="col-start-1 col-end-3 text-white bg-gray-500 rounded text-lg focus:outline-none hover:bg-gray-700 my-3 p-2"
                onClick={() =>add(BULK_UNIT)}>+{BULK_UNIT}</button>
            </div>
          </div>
          <div className="grid grid-cols-10 justify-items-center mt-5">
            {
              BEADS_COLORS.map((color, index) => {
                return <div className={`rounded-full h-8 w-8 bg-${color}-500`} key={index}></div>
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
