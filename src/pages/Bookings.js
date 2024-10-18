import { useState, useEffect, useCallback } from 'react';
import AppointmentInfo from './../components/AppointmentInfo';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Container from 'react-bootstrap/Container';

const Bookings = () => {
    let [appointmentList, setAppointmentList] = useState([]);
    let [query, SetQuery] = useState("");
    let [sortBy, SetSortBy] = useState("petName"); //ownerName or petName etc
    let [orderBy, SetOrderBy] = useState("asc"); //asc or des

    const filteredAppointments = appointmentList.filter(
        item => {
          return (
            item.petName.toLowerCase().includes(query.toLowerCase()) || 
            item.ownerName.toLowerCase().includes(query.toLowerCase()) || 
            item.aptNotes.toLowerCase().includes(query.toLowerCase())
          )
        }
      ).sort((a, b) => {
        let order = (orderBy === 'asc') ? 1 : -1;
        return (
          a[sortBy].toLowerCase() < b[sortBy].toLowerCase() 
            ? -1 * order : 1 * order 
        )
      })

      const fetchData = useCallback(() => {
        fetch('./data.json')
          .then(response => response.json())
          .then(data => {
            setAppointmentList(data)
          });
      }, [])
    
      useEffect(() => {
        fetchData()
      }, [fetchData]);

    return (
        <div>
        <h1>Your bookings</h1>
        <Container>
            <Row>
                <Col>
                <DropdownButton as={ButtonGroup} title="Sort by" id="bg-nested-dropdown">
                    <Dropdown.Item onClick={() => SetSortBy('petName')} eventKey="1">Pet Name</Dropdown.Item>
                    <Dropdown.Item onClick={() => SetSortBy('ownerName')} eventKey="2">Owner Name</Dropdown.Item>
                    <Dropdown.Item onClick={() => SetSortBy('aptDate')} eventKey="3">Date</Dropdown.Item>
                </DropdownButton>
                </Col>

                <Col>
                <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                    <ToggleButton onClick={() => SetOrderBy('asc')} id="tbg-radio-1" value={1}>Ascending</ToggleButton>
                    <ToggleButton onClick={() => SetOrderBy('dec')} id="tbg-radio-2" value={2}>Descending</ToggleButton>
                </ToggleButtonGroup>
                </Col>
            </Row>
        </Container>
        <br/>
        
        <ul>
        {filteredAppointments
          .map(appointment => (
            <AppointmentInfo key={appointment.id}
              appointment={appointment}
              onDeleteAppointment={
                appointmentId => 
                  setAppointmentList(appointmentList.filter(appointment => 
                    appointment.id !== appointmentId))
              }
            />
          ))
        }
        </ul>
        </div>
    );
};

export default Bookings;