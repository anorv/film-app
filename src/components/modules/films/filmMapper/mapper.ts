import { FilmResponce } from '../store/filmActions';
import { Film } from '../store/filmSlice';
import { FilmPeopleResponce } from '../store/filmPeopleActions';
import { FilmPeople } from '../store/filmPeopleSlice';

export function filmDisplayMapper(res: FilmResponce): Film {
  return {
    title: res.title,
    id: res.episode_id,
    releaseDate: res.release_date,
  };
}

export function filmPeopleDisplayMapper(res: FilmPeopleResponce): FilmPeople {
  return {
    name: res.name,
    gender: res.gender,
    birthYear: res.birth_year,
    mass: res.mass,
    films: res.films,
  };
}
