import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../components/mainNav.scss';

function MainNav() {
  return (
    <Nav defaultActiveKey="/" className="flex-column bg-dark text-light mt-3">
      <Nav.Item>
        <NavLink to="/" className="nav-link text-light">
          About
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/films" className="nav-link text-light">
          Films
        </NavLink>
      </Nav.Item>
    </Nav>
  );
}

export default MainNav;
