import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';

const Search = () => {
    return (
        <Navbar className="bg-body-tertiary justify-content-between">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Sort By
            </Dropdown.Toggle>
      
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Name</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Date</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Priority</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
      
          <Form inline>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="keywords"
                  className=" mr-sm-2"
                />
              </Col>
              <Col xs="auto">
                <Button type="submit">Search</Button>
              </Col>
            </Row>
          </Form>
        </Navbar>
    )
}

export default Search;