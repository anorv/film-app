import { FilmPeople } from '../../store/filmPeopleSlice';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';

const PeopleByFilmId: React.FC<{ filmPeopleData: FilmPeople[] }> = ({ filmPeopleData }) => {
  const loading = useSelector((state: RootState) => state.filmPeople.loading);
  const error = useSelector((state: RootState) => state.filmPeople.error);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (filmPeopleData) {
    return (
      <div className="table-responsive mt-4" style={{ maxHeight: '350px', overflowY: 'scroll' }}>
        <table className="table table-striped table-scrollable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Birth Year</th>
              <th>Mass</th>
            </tr>
          </thead>
          <tbody>
            {filmPeopleData.map((person: FilmPeople, index: number) => (
              <tr key={index} className={index % 2 === 0 ? 'table-gray' : 'table-light'}>
                <td>{person.name}</td>
                <td>{person.gender}</td>
                <td>{person.birthYear}</td>
                <td>{person.mass}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return null;
};

export default PeopleByFilmId;
