import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { counterSlice, CounterState } from '../features/counter';
import CounterBoard from '../components/CounterBoard';

const EnhancedCounterBoard: React.FC = () => {
  const count = useSelector<CounterState, number>((state) => state.count);
  const dispatch = useDispatch();
  const { added, decremented, incremented } = counterSlice.actions;

  return (
    <CounterBoard
      count={count}
      add={(amount: number) => dispatch(added(amount))}
      decrement={() => dispatch(decremented())}
      increment={() => dispatch(incremented())}
    />
  );
};

export default EnhancedCounterBoard;