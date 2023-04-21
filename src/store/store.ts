import { configureStore, ThunkAction, AnyAction } from '@reduxjs/toolkit';
import filmSlice from 'src/components/modules/films/store/filmSlice';
import filmPeopleSlice from 'src/components/modules/films/store/filmPeopleSlice';

export const store = configureStore({
  reducer: {
    film: filmSlice.reducer,
    filmPeople: filmPeopleSlice.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;
