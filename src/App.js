import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AddAppointmentInfo from './pages/AddAppointmentInfo';
import Bookings from './pages/Bookings';
import MyNavbar from './components/MyNavbar';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <MyNavbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/add-appointment" element={<AddAppointmentInfo />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
