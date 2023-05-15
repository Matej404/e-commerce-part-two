import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Register from '../routes/Register/Register';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
        <Route path="register/*" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
