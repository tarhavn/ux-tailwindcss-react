import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const MyNavbar = () => {
    return (
        <Navbar className="bg-body-tertiary justify-content-between">
          <Container>
            <Row>
              <Col><Button href='/' variant="secondary">Homepage</Button></Col>
              <Col><Button href="/bookings" variant="info">Bookings</Button></Col>
              <Col><Button href="/add-appointment" variant="success">+Appointment</Button></Col>
            </Row>
          </Container>
        </Navbar>
    )
}

export default MyNavbar;