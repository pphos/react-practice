import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Todo = {
  id?: number
  title: string
  status: string
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState: [
    {
      id: 0,
      title: 'にぼし',
      status: '未対応'
    }
  ],
  reducers: {
    created: (state: Todo[], action: PayloadAction<Todo>) => {
      const id = state.length;
      state.push({...action.payload, id});
    }
  }
});

export const { created } = todoSlice.actions;

export default todoSlice.reducer;