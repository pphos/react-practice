import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import { created, deletedAll } from '../features/todoSlice';

const TodoForm: React.FC = () => {
  const [state, setState] = useState({
    title: '',
    status: '未対応',
  });

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(created({ ...state }));
    setState({
      title: '',
      status: '未対応',
    });
  };

  const handleDeleteAll = () => {
    dispatch(deletedAll());
  };

  return (
    <form noValidate autoComplete="off">
      <TextField
        label="Todo"
        value={state.title}
        onChange={(e) => {
          const title = e?.target.value || '';
          setState({ ...state, title });
        }}
      />
      <TextField
        select
        label="ステータス"
        style={{ minWidth: 100, marginLeft: 30, marginRight: 30 }}
        value={state.status}
        onChange={(e) => {
          const status = e?.target.value || '';
          setState({ ...state, status });
        }}
      >
        {['未対応', '処理中', '完了'].map((item, index) => {
          return (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          );
        })}
      </TextField>
      <Button
        variant="contained"
        color="primary"
        style={{ marginLeft: 15 }}
        onClick={handleSubmit}
      >
        登録
      </Button>
      <Button
        variant="contained"
        color="secondary"
        style={{ marginLeft: 15 }}
        onClick={handleDeleteAll}
      >
        全件削除
      </Button>
    </form>
  );
};

export default TodoForm;
