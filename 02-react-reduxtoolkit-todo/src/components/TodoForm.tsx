import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const TodoForm: React.FC = () => {
  return (
    <form noValidate autoComplete="off">
      <TextField label="Todo" />
      <Button variant="contained" color="primary" style={{ marginLeft: 15 }}>
        登録
      </Button>
    </form>
  );
};

export default TodoForm;
