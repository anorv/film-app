import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

type Props = {
  title: string;
  id: number;
  releaseDate: string;
  onFilmPeople: (id: number) => void;
};

const FilmCard: React.FC<Props> = ({ title, id, releaseDate, onFilmPeople }) => {
  const showPeople = (): void => {
    onFilmPeople(id);
  };
  return (
    <Card className="m-2">
      <Card.Body>
        <Row>
          <Col md={9}>
            <Row>
              <h5>{title}</h5>
              <p className="fs-6 small">Release date: {releaseDate}</p>
              <div>
                <button type="button" onClick={showPeople} className="bgr-color text-white border-0 p-2 rounded">
                  Show people
                </button>
              </div>
            </Row>
          </Col>
          <Col md={3}>
            <div>
              <p className="text-center bgr-color pb-5 text-white rounded mt-2">Id: {id}</p>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
export default FilmCard;
