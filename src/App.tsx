import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppWrapper from './AppWrapper';
import About from './components/modules/about/About';
import FilmView from './components/modules/films/views/FilmView';
import './assets/globalStyles.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppWrapper />,
    children: [
      {
        path: '/',
        element: <About />,
      },
      {
        path: '/films',
        element: <FilmView />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
