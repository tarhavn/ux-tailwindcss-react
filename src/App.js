import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search';
import { SlCalender } from "react-icons/sl";
import appointmentList from './data.json'
import AppointmentInfo from './components/AppointmentInfo';

function App() {
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
