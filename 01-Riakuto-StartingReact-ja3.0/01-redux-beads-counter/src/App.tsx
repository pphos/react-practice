import React, { useState } from "react";

import Container from "./components/Contaner";
import CounterBoard from "./components/CounterBoard";
import CounterBeads from "./components/CounterBeads";

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const add = (amount: number) => {
    setCount((count) => count + amount);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <Container>
      <CounterBoard
        count={count}
        add={add}
        decrement={decrement}
        increment={increment}
      />
      <CounterBeads count={count}/>
    </Container>
  );
};

export default App;
