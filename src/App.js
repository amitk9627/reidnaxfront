import './App.css';
import { Routes, Route } from 'react-router-dom'
import Login from './routes/Login';
import Dash from './routes/Dash';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dash' element={<Dash />} />
      </Routes>
    </>
  );
}

export default App;
