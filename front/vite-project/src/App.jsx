import NavBar from "./components/NavBar/NavBar";
import About from "./views/About/About";
import Home from "./views/Home/Home";
/* import MisTurnos from "./views/MisTurnos"; */
import Appointments from "./views/Appointments/Appointments";
import Register from "./views/Register/Register";


function App() {
  return (
    <>
        <NavBar />
        <Appointments />
        <Home />
        <About />
        <Register />
        
        
        {/* <MisTurnos /> */}
    </>
  );
}

export default App;
