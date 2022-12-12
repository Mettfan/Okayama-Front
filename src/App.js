import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Landing from './Components/Landing/Landing';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Products from './Components/Productos/Products';
import Inscription from './Components/Inscripcion/Inscription';
import LocationDojos from './Components/LocationDojos/LocationDojos';
import TeamOutstanding from './Components/NavBar/TeamOutstanding.js/TeamOutstanding';
import TeamOutstandingLanding from './Components/TeamOutstandingLanding/TeamOutstandingLanding.js';
import UncompletePage from './Components/UncompletePage/UncompletePage';
import Admin from './Components/Admin/Admin';
import Landing2 from './Components/Landing/Landing2';

function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <Routes>
        <Route path='/' element={<Landing2/>} />
        <Route path='/Conocenos' element={<About/>} />
        <Route path='/Productos' element={<Products/>} />
        <Route path='/Inscripcion' element={<Inscription/>} />
        {/* <Route path='/login' element={<Login/>} />  */}
        {/* <Route path='/register' element={<Register/>} /> */}
        <Route path='/location' element={<LocationDojos/>} />
        <Route path='/teamOutStanding' element={<TeamOutstandingLanding/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='*' exact={true} element={<UncompletePage></UncompletePage>}></Route>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
