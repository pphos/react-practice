import React from 'react';
import { useSelector } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';

import TodoItem from './TodoItem';
import { Store } from '../store';
import { Todo } from '../features/todoSlice';

const TodoList: React.FC = () => {
  const todos = useSelector<Store, Todo[]>((state) => state.todos);

  return (
    <TableContainer component={Paper}>
      <Table style={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>No.</TableCell>
            <TableCell>ステータス</TableCell>
            <TableCell>タスク名</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((todo, index) => {
            return <TodoItem todo={todo} key={index} />;
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TodoList;
