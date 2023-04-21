import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FilmCard from '../components/modules/films/views/components/FilmCard';

describe('FilmCard', () => {
  it('renders the component with the correct title, release date, and id', () => {
    const title = 'Test Title';
    const id = 123;
    const releaseDate = '2022-01-01';
    const onFilmPeople = jest.fn();

    render(<FilmCard title={title} id={id} releaseDate={releaseDate} onFilmPeople={onFilmPeople} />);

    const titleElement = screen.getByText(title);
    const releaseDateElement = screen.getByText(`Release date: ${releaseDate}`);
    const idElement = screen.getByText(`Id: ${id}`);

    expect(titleElement).toBeInTheDocument();
    expect(releaseDateElement).toBeInTheDocument();
    expect(idElement).toBeInTheDocument();
  });

  it('calls onFilmPeople with the correct id when the "Show people" button is clicked', () => {
    const onFilmPeople = jest.fn();
    const id = 123;

    render(<FilmCard title="Test Title" id={id} releaseDate="2022-01-01" onFilmPeople={onFilmPeople} />);

    const showPeopleButton = screen.getByText('Show people');
    userEvent.click(showPeopleButton);

    expect(onFilmPeople).toHaveBeenCalledWith(id);
  });
});
