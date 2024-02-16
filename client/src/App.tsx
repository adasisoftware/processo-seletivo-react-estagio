import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/sidebar';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Sidebar />
      <div className="flex-grow-1">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
