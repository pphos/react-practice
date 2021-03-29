import React from 'react';
import { useSelector } from 'react-redux';

import CounterBeads from '../components/CounterBeads';
import { CounterState } from '../reducer';

const EnhancedCounterBeads: React.FC<{ count?: number }> = () => {
  const count = useSelector<CounterState, number>((state) => state.count)

  return <CounterBeads count={count} />;
}

export default EnhancedCounterBeads;