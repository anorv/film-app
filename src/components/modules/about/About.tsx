import Card from 'react-bootstrap/Card';

function About() {
  const text =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sapiente quisquam quasi voluptas delectus voluptate. Tempore perferendis eum aperiam quia eius sapiente commodi, quibusdam laudantium expedita suscipit ea quam eveniet?';
  return (
    <Card className="m-2">
      <Card.Body>
        <div>
          <p className="text-center">{text}</p>
        </div>
      </Card.Body>
    </Card>
  );
}

export default About;
