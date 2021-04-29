import React from 'react';
import { useDispatch } from 'react-redux';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import { Todo } from '../features/todoSlice';
import { deletedOne } from '../features/todoSlice';

type Props = {
  todo: Todo;
};

const TodoItem: React.FC<Props> = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <TableRow>
      <TableCell>
        <IconButton
          onClick={() => {
            dispatch(deletedOne(todo));
          }}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </TableCell>
      <TableCell align="left">{todo.id}</TableCell>
      <TableCell align="left">{todo.status}</TableCell>
      <TableCell align="left">{todo.title}</TableCell>
    </TableRow>
  );
};

export default TodoItem;
