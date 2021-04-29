import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Todo = {
  id?: number
  title: string
  status: string
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    created: (state: Todo[], action: PayloadAction<Todo>) => {
      const id = state.length;
      state.push({...action.payload, id});
    },
    deletedOne: (state: Todo[], action: PayloadAction<Todo>) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state.splice(index, 1);
    },
    deletedAll: (state: Todo[]) => {
      state.splice(0, state.length);
    }
  }
});

export const { created, deletedOne, deletedAll} = todoSlice.actions;

export default todoSlice.reducer;