import React from 'react';
import Grid from '@material-ui/core/Grid';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      style={{ marginTop: 30 }}
    >
      <Grid item>
        <TodoForm />
      </Grid>
      <Grid item style={{ marginTop: 20 }}>
        <TodoList />
      </Grid>
    </Grid>
  );
};

export default App;
