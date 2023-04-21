import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { RootState } from 'src/store/store';
import { getFilmData } from '../store/filmActions';
import { getFilmPeopleData } from '../store/filmPeopleActions';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';
import FilmDisplay from './components/FilmDisplay';
import PeopleByFilmId from './components/PeopleByFilmId';

const FilmView: React.FC = () => {
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
  const filmsData = useSelector((state: RootState) => state.film.data);
  const filmPeopleData = useSelector((state: RootState) => state.filmPeople.data);
  const [filmId, setFilmId] = useState<number>();

  const viewFilmPeople = (filmId: number): void => {
    setFilmId(filmId);
  };

  useEffect((): void => {
    dispatch(getFilmData());
  }, [dispatch]);

  useEffect(() => {
    if (filmId) {
      dispatch(getFilmPeopleData(filmId));
    }
  }, [filmId, dispatch]);

  return (
    <Fragment>
      <FilmDisplay filmData={filmsData} onFilmPeople={viewFilmPeople} />
      {filmId && filmPeopleData && <PeopleByFilmId filmPeopleData={filmPeopleData} />}
    </Fragment>
  );
};

export default FilmView;
