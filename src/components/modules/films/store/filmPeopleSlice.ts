import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type FilmPeople = {
  name: string;
  gender: string;
  birthYear: string;
  mass: string;
  films: string[];
};

export type FilmPeopleState = {
  data: FilmPeople[] | null;
  loading: boolean;
  error: string | null;
};

const initialState: FilmPeopleState = {
  data: null,
  loading: false,
  error: null,
};

const filmPeopleSlice = createSlice({
  name: 'filmPeople',
  initialState,
  reducers: {
    getDataStart(state): void {
      state.loading = true;
    },
    getDataSuccess(state, action: PayloadAction<FilmPeople[]>): void {
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

export const { getDataStart, getDataSuccess, getDataFailure } = filmPeopleSlice.actions;

export default filmPeopleSlice;
