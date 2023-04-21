import { useSelector } from 'react-redux';
import FilmCard from './FilmCard';
import { RootState } from 'src/store/store';
import { Film } from '../../store/filmSlice';
import React from 'react';

const FilmDisplay: React.FC<{ filmData: Film[] | null; onFilmPeople: (id: number) => void }> = ({
  filmData,
  onFilmPeople,
}) => {
  const loading = useSelector((state: RootState) => state.film.loading);
  const error = useSelector((state: RootState) => state.film.error);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (filmData) {
    return (
      <div className="d-flex overflow-auto">
        {filmData.map((film: Film) => (
          <div key={film.id} className="flex-shrink-0">
            <FilmCard title={film.title} id={film.id} releaseDate={film.releaseDate} onFilmPeople={onFilmPeople} />
          </div>
        ))}
      </div>
    );
  }

  return null;
};

export default FilmDisplay;
