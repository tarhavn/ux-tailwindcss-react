import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const MyNavbar = ({ query, onQueryChange }) => {
  const [searchtext, setSearchtext] = useState('');

    return (
        <Navbar className="bg-body-tertiary justify-content-between">
          <Container>
            <Row>
              <Col><Button href='/' variant="secondary">Homepage</Button></Col>

              <Col><Button variant="success">Appointment</Button></Col>

              <Col>
                <Form inline>
                <Form.Control
                    type="text"
                    placeholder="keyword"
                    className=" mr-sm-2"
                    value={searchtext}
                    onChange={e => setSearchtext(e.target.value)}
                  />
                </Form>
              </Col>

              <Col><Button type="submit" onClick={() => alert(searchtext)}>Search</Button></Col>
              
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