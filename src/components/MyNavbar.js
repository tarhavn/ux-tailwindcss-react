import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const MyNavbar = ({ query, onQueryChange }) => {
    return (
        <Navbar className="bg-body-tertiary justify-content-between">
          <Container>
            <Row>
              <Col><Button href='/' variant="secondary">Homepage</Button></Col>
              <Col><Button variant="success">Appointment</Button></Col>
              
              <Col>
              <DropdownButton as={ButtonGroup} title="Sort by" id="bg-nested-dropdown">
                <Dropdown.Item onClick={() => console.log("console log pet name")} eventKey="1">Pet Name</Dropdown.Item>
                <Dropdown.Item eventKey="2">Owner Name</Dropdown.Item>
                <Dropdown.Item eventKey="3">Date</Dropdown.Item>
                <Dropdown.Item eventKey="4">Ascending</Dropdown.Item>
                <Dropdown.Item eventKey="5">Descending</Dropdown.Item>
              </DropdownButton>
              </Col>

              <Col><input type="text" name="query" id="query" value={query} 
                onChange={(event) => {onQueryChange(event.target.value)}}
                placeholder="Search" /></Col>
            </Row>
          </Container>
        </Navbar>
    )
}

export default MyNavbar;