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
      state.push(action.payload)
    }
  }
});

export default todoSlice.reducer;