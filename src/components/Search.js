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
          <Button href='/' variant="secondary">Homepage</Button>

          <div>
            <NavDropdown title="Sort By" id="collapsible-nav-dropdown">
              <NavDropdown.Item onClick={() => console.log("console log pet name")}>Pet Name</NavDropdown.Item>
              <NavDropdown.Item onClick={() => console.log("console log owner name")}>Owner Name</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => console.log("console log date")}>Date</NavDropdown.Item>
              <NavDropdown.Item onClick={() => console.log("console log asending")}>Ascending</NavDropdown.Item>
              <NavDropdown.Item onClick={() => console.log("console log descending")}>Descending</NavDropdown.Item>
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