import { configureStore } from '@reduxjs/toolkit';
import todoSlice from '../features/counter/todoSlice';

export const store = configureStore({
  reducer: {
    toDo : todoSlice,
  },
});
