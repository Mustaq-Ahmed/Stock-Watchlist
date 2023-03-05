import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Watchlist from './components/Watchlist/Watchlist';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<Navigate to="/home" replace={true} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </>
  );
}

export default App;
