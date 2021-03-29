import React, { useState } from "react";

import Container from "./components/Contaner";
import CounterBoard from "./containers/CounterBoard";
import CounterBeads from "./containers/CounterBeads";

const App: React.FC = () => {

  return (
    <Container>
      <CounterBoard />
      <CounterBeads />
    </Container>
  );
};

export default App;
