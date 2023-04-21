import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import PeopleByFilmId from '../components/modules/films/views/components/PeopleByFilmId';

const mockStore = configureStore([]);

describe('PeopleByFilmId', () => {
  it('displays "Loading..." text when loading is true', () => {
    const store = mockStore({ filmPeople: { loading: true, error: null } });
    const { getByText } = render(
      <Provider store={store}>
        <PeopleByFilmId filmPeopleData={[]} />
      </Provider>
    );
    expect(getByText('Loading...')).toBeInTheDocument();
  });
});
