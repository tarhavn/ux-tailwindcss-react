import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search';
import { SlCalender } from "react-icons/sl";
import AppointmentInfo from './components/AppointmentInfo';
import { useState, useEffect, useCallback } from 'react';

function App() {
  let [appointmentList, setAppointmentList] = useState([]);

  const fetchData = useCallback(() => {
    fetch('./data.json')
      .then(response => response.json)
      .then(data => {
        setAppointmentList(data)
      });
  }, [])

  useEffect(() => {
    fetchData();
  }, [fetchData])

  return (
    <div className="App container">
      <h1><SlCalender /> Your bookings</h1>
      <Search />

      <ul className="comment">
        {appointmentList
          .map(appointment => (
            <AppointmentInfo key={appointment.id}
              appointment={appointment}
            />
          ))
        }
      </ul>

    </div>
  );
}

export default App;
