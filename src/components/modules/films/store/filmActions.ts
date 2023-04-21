import axios from 'axios';
import { Film } from './filmSlice';
import { AppThunk } from 'src/store/store';
import { getDataStart, getDataSuccess, getDataFailure } from './filmSlice';
import { filmDisplayMapper } from '../filmMapper/mapper';

export type FilmResponce = {
  title: string;
  episode_id: number;
  release_date: string;
};
const fetchFilmData = async (): Promise<Film[]> => {
  try {
    const response = await axios.get('https://swapi.dev/api/films/');
    const data = response.data.results;
    const films: Film[] = data.map((filmData: FilmResponce) => filmDisplayMapper(filmData));
    return films;
  } catch (error: any) {
    throw new Error(error.toString());
  }
};

export const getFilmData = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getDataStart());
    const films = await fetchFilmData();
    if (films) {
      dispatch(getDataSuccess(films));
    } else {
      dispatch(getDataFailure('Failed to fetch film data'));
    }
  } catch (error) {
    if (typeof error === 'object' && error instanceof Error) {
      dispatch(getDataFailure(error.message));
    } else {
      dispatch(getDataFailure('Unknown error occurred'));
    }
  }
};
