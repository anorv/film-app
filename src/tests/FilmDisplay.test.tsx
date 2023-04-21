import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import FilmDisplay from '../components/modules/films/views/components/FilmDisplay';

const mockStore = configureStore([]);

describe('FilmDisplay component', () => {
  test('renders film cards', () => {
    const filmData = [
      { id: 1, title: 'Film 1', releaseDate: '2022-01-01' },
      { id: 2, title: 'Film 2', releaseDate: '2022-02-01' },
    ];
    const store = mockStore({ film: { loading: false, error: null } });
    const { getByText } = render(
      <Provider store={store}>
        <FilmDisplay filmData={filmData} onFilmPeople={() => {}} />
      </Provider>
    );
    expect(getByText('Film 1')).toBeInTheDocument();
    expect(getByText('Film 2')).toBeInTheDocument();
  });
});
