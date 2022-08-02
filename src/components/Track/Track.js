import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Button from 'react-bootstrap/Button';

const track = ( props ) => {
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
    
    function getImageRandom(min, max) {
        return `https://source.unsplash.com/1200x${getRandomArbitrary(min, max)}?musician,portrait`
    }

  return (
<Aux>
    <h1 style={{ color: 'rgb(21, 21, 75)', marginBottom: '30px' }}>Boquizz Tracks</h1>
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: props.length }).map((_, idx) => (
        <Col>
          <Card style={{ border: '3px dotted rgb(21, 21, 75)', marginBottom: '20px' }}>
            <Card.Img variant="top" src={getImageRandom(600, 610)} />
            <Card.Body>
              <Card.Title>Boquizz Album</Card.Title>
              <Card.Text>
                  Boquizz awesome album.
              </Card.Text>
              <Button style={ {backgroundColor: 'rgb(21, 21, 75)', color: 'white', width: '180px', height: '45px'} }>Buy Album</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
</Aux>
  );
}

export default track;