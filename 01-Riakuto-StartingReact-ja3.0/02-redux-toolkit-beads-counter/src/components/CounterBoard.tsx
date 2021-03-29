import React from 'react';

import Button from './Button';

const BULK_UNIT = 10;

type Props = {
  count?: number;
  add?: (amount: number) => void;
  decrement?: () => void;
  increment?: () => void;
}

const CounterBoard: React.FC<Props> = ({
  count = 0,
  add = () => undefined,
  decrement = () => undefined,
  increment = () => undefined,
}) => {
  return (
    <div className="border-2 border-gray-200 border-opacity-60 rounded-lg py-5">
      <h1 className="title-font text-2xl font-medium text-gray-600 pt-4 text-center">
        ビーズカウンター
      </h1>
      <div className="text-center px-3">
        <p className="font-medium text-6xl text-gray-800 mb-6">
          {count}
        </p>
        <div className="grid grid-cols-2">
          <Button color="red" onClick={decrement}>
            -1
          </Button>
          <Button color="green" onClick={increment}>
            +1
          </Button>
          <Button
            optionClass="col-start-1 col-end-3 my-2"
            color="gray"
            onClick={() => add(BULK_UNIT)}
          >
            +{BULK_UNIT}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CounterBoard;