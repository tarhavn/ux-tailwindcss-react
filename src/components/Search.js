import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

const Search = () => {
  const [searchtext, setSearchtext] = useState('');

    return (
        <Navbar className="bg-body-tertiary justify-content-between">
          <div>
            <Navbar.Brand>Sort By</Navbar.Brand>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Pet Name" />
              <Form.Check type="checkbox" label="Owner Name" />
              <Form.Check type="checkbox" label="Date" />
              <Form.Check type="checkbox" label="Ascending" />
              <Form.Check type="checkbox" label="Descending" />
            </Form.Group>
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