import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search';
import { SlCalender } from "react-icons/sl";
import appointmentList from './data.json'

function App() {
  return (
    <div className="App container">
      <h1><SlCalender /> Your bookings</h1>
      <Search />

      <ul className="comment">
        {appointmentList
          .map(appointment => (
            <li>
              <button type="button">Delete</button>
              <div>
                <div><b>Pet name: </b>{appointment.petName}</div>
                <div><b>Appointment date: </b>{appointment.aptDate}</div>
                <div><b>Owner: </b>{appointment.ownerName}</div>
                <div><b>Consultation note: </b>{appointment.aptNotes}</div>
              </div>
          </li>
          ))
        }
      </ul>

    </div>
  );
}

export default App;
