import { configureStore } from '@reduxjs/toolkit';
import todoReducer, { Todo } from './features/todoSlice';

export type Store = {
  todos: Todo[]
}

export default configureStore({
  reducer: {
    todos: todoReducer,
  }
})