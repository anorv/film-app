import axios from 'axios';
import { FilmPeople } from './filmPeopleSlice';
import { AppThunk } from 'src/store/store';
import { getDataStart, getDataSuccess, getDataFailure } from './filmPeopleSlice';
import { filmPeopleDisplayMapper } from '../filmMapper/mapper';

export type FilmPeopleResponce = {
  name: string;
  gender: string;
  birth_year: string;
  mass: string;
  films: string[];
};
export function filterPeopleByFilmId(people: FilmPeopleResponce[], id: number): FilmPeopleResponce[] {
  return people.filter((person: FilmPeopleResponce) => person.films.includes(`https://swapi.dev/api/films/${id}/`));
}
const fetchFilmPeopleData = async (id: number): Promise<FilmPeople[]> => {
  try {
    const response = await axios.get(`https://swapi.dev/api/people`);

    const peoplesByFilmId = filterPeopleByFilmId(response.data.results, id);
    console.log(peoplesByFilmId);
    const people: FilmPeople[] = peoplesByFilmId.map((filmData: FilmPeopleResponce) =>
      filmPeopleDisplayMapper(filmData)
    );

    return people;
  } catch (error: any) {
    throw new Error(error.toString());
  }
};

export const getFilmPeopleData =
  (id: number): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(getDataStart());
      const people = await fetchFilmPeopleData(id);
      if (people) {
        dispatch(getDataSuccess(people));
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
