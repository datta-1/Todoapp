import './App.css';
import {Routes, Route} from 'react-router-dom';
import Landing from './pages/LandingPage/Landing';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import About from './pages/About/About';
import Todos from './pages/Todos/Todos';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/about' element={<About />} />
        <Route path='/todolist' element={<Todos />} />
        <Route path='/Home' element={<Home />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
