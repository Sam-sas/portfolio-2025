import './App.css';
import Navigation from './components/Navigation';
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
