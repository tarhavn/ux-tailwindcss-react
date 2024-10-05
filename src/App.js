import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search';
import AppointmentInfo from './components/AppointmentInfo';
import { useState, useEffect, useCallback } from 'react';
import AddAppointmentInfo from './components/AddAppointmentInfo';

function App() {
  let [appointmentList, setAppointmentList] = useState([]);

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
      <Search />
      <br />
      <AddAppointmentInfo />
      <br />
      <h1>Your bookings</h1>

      <ul>
        {appointmentList
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
