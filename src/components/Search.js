import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

import NavDropdown from 'react-bootstrap/NavDropdown';

const Search = () => {
  const [searchtext, setSearchtext] = useState('');

    return (
        <Navbar className="bg-body-tertiary justify-content-between">
          <div>
            <NavDropdown title="Sort By" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Pet Name</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Owner Name</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Date</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Ascending</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Descending</NavDropdown.Item>
            </NavDropdown>
          </div>
      
          <Form inline>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="keywords"
                  className=" mr-sm-2"
                  value={searchtext}
                  onChange={e => setSearchtext(e.target.value)}
                />
              </Col>
              <Col xs="auto">
                <Button type="submit" onClick={() => alert(searchtext)}>Search</Button>
              </Col>
            </Row>
          </Form>
        </Navbar>
    )
}

export default Search;