import './App.css';
import Nav from './components/Nav/Nav';
import Landing from "./components/Landing/Landing"
import Home from "./components/Home/Home"
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import axios from "axios"
import { useLocation, Routes, Route } from "react-router-dom"
axios.defaults.baseURL = "https://deploy-production-0801.up.railway.app/"


function App() {

  const location = useLocation()
  return (

    <div className='structure'>
      {location.pathname !== "/" ? <Nav /> : null}

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/form' element={<Form />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>

    </div>
  );
}

export default App;
