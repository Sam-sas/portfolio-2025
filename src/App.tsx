import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import { Outlet } from 'react-router';

function App() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}

export default App;
