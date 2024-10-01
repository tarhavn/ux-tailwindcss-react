import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search';
import { SlCalender } from "react-icons/sl";

function App() {
  return (
    <div className="App container">
      <h1><SlCalender /> Your bookings</h1>
      <Search />
    </div>
  );
}

export default App;
