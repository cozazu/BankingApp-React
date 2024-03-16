import NavBar from "./components/NavBar/NavBar";
import About from "./views/About/About";
import Home from "./views/Home/Home";
/* import MisTurnos from "./views/MisTurnos"; */
import Appointments from "./views/Appointments/Appointments";
import Register from "./views/Register/Register";
import Login from "./views/Login/Login";
import { Routes, Route } from "react-router-dom";
import Contact from "./views/Contact/Contact";
import Landing from "./views/Landing/Landing";
import AppointmentForm from "./views/AppointmentForm/AppointmentForm";


function App() {
  return (
    <>
        <NavBar />  
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/appointmentform" element={<AppointmentForm />} />
        </Routes>
    </>
  );
}

export default App;
