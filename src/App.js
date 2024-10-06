import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';
import AppointmentInfo from './components/AppointmentInfo';
import { useState, useEffect, useCallback } from 'react';
import AddAppointmentInfo from './components/AddAppointmentInfo';

function App() {
  let [appointmentList, setAppointmentList] = useState([]);
  let [query, SetQuery] = useState("");

  const filteredAppointments = appointmentList.filter(
    item => {
      return (
        item.petName.toLowerCase().includes(query.toLowerCase()) || 
        item.ownerName.toLowerCase().includes(query.toLowerCase()) || 
        item.aptNotes.toLowerCase().includes(query.toLowerCase())
      )
    }
  )

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
    <div className="App container">
      <br />
      <MyNavbar query={query}
        onQueryChange={myQuery => SetQuery(myQuery)} />
      <br />
      <AddAppointmentInfo />
      <br />
      <h1>Your bookings</h1>

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
}

export default App;
