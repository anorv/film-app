import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Film = {
  title: string;
  id: number;
  releaseDate: string;
};

export type FilmState = {
  data: Film[] | null;
  loading: boolean;
  error: string | null;
};

const initialState: FilmState = {
  data: null,
  loading: false,
  error: null,
};

const filmSlice = createSlice({
  name: 'film',
  initialState,
  reducers: {
    getDataStart(state): void {
      state.loading = true;
    },
    getDataSuccess(state, action: PayloadAction<Film[]>): void {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    getDataFailure(state, action: PayloadAction<string>): void {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getDataStart, getDataSuccess, getDataFailure } = filmSlice.actions;

export default filmSlice;
