import { Outlet } from 'react-router-dom';
import MainNav from './components/MainNav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Fragment } from 'react';

function AppWrapper() {
  return (
    <Fragment>
      <Container fluid className="vh-100">
        <Row className="vh-container">
          <Col xs={12} sm={2} className="order-sm-1">
            <MainNav />
          </Col>
          <Col xs={12} sm={10} className="order-sm-2">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default AppWrapper;
