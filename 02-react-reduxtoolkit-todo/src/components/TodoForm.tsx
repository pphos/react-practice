import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { created } from '../features/todoSlice';

const TodoForm: React.FC = () => {
  const [state, setState] = useState({
    title: '',
    status: '未対応'
  });

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(created({...state}));
    setState({
      title: '',
      status: '未対応'
    });
  };

  return (
    <form noValidate autoComplete="off">
      <TextField
        label="Todo"
        value={state.title}
        onChange={(e) => {
          const title = e?.target.value || '';
          setState({...state, title});
        }}
      />
      <Button
        variant="contained"
        color="primary"
        style={{ marginLeft: 15 }}
        onClick={handleSubmit}
      >
        登録
      </Button>
    </form>
  );
};

export default TodoForm;
