import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import { Outlet } from 'react-router';

function App() {
  return (
    <div className='h-screen flex flex-col-reverse justify-between md:flex-col md:justify-start'>
      <Navigation />
      <Outlet />
    </div>
  )
}

export default App;
