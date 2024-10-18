import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

const MyNavbar = ({ query, onQueryChange, sortBy, onSortByChange, orderBy, onOrderByChange }) => {
    return (
        <Navbar className="bg-body-tertiary justify-content-between">
          <Container>
            <Row>
              <Col><Button href='/' variant="secondary">Homepage</Button></Col>
              <Col><Button variant="success">Appointment</Button></Col>
              
              <Col>
              <DropdownButton as={ButtonGroup} title="Sort by" id="bg-nested-dropdown">
                <Dropdown.Item onClick={() => onSortByChange('petName')} eventKey="1">Pet Name</Dropdown.Item>
                <Dropdown.Item onClick={() => onSortByChange('ownerName')} eventKey="2">Owner Name</Dropdown.Item>
                <Dropdown.Item onClick={() => onSortByChange('aptDate')} eventKey="3">Date</Dropdown.Item>
              </DropdownButton>
              </Col>

              <Col>
              <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                <ToggleButton onClick={() => onOrderByChange('asc')} id="tbg-radio-1" value={1}>Ascending</ToggleButton>
                <ToggleButton onClick={() => onOrderByChange('dec')} id="tbg-radio-2" value={2}>Descending</ToggleButton>
              </ToggleButtonGroup>
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